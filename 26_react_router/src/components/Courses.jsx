import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import courses from '../data/coures';
import React, { useEffect, useState } from 'react';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(array, key) {
  const sortedCourses = [...array];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

export default function Courses() {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();

  const [sortKey, setSortKey] = useState(query.sort);

  const [sortedCourses, setSourtedCourses] = useState(sortCourses(courses, sortKey));

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey();
      setSourtedCourses([...courses]);
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            <h2>{course.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}
