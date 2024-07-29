import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import courses from '../data/coures';
// import NotFound from './NotFound';

export default function SingleCourses() {
  const params = useParams();
  const navigete = useNavigate();

  const course = courses.find((course) => course.slug === params.courseSlug);
  if (!course) {
    navigete('..', { relative: 'path' });
  }

  useEffect(() => {
    if (!course) {
      navigete('..', { relative: 'path' });
    }
  }, [course, navigete]);

  // Simply show not found component
  // if (!course) {
  //   return <NotFound />;
  // }
  return (
    <>
      <h2>{course?.title}</h2>
      <h3>{course?.slug}</h3>
      <h3>{course?.id}</h3>

      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
}
