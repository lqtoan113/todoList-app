
import { Link, useLocation } from 'react-router-dom';
import { Todo } from '../interfaces/todo';

const AboutPage = () => {
  const location = useLocation();
  const todo = location.state?.todo as Todo;  // Lấy thông tin todo từ state

  if (!todo) {
    return <p>Không tìm thấy công việc.</p>;
  }

  return (
    <div>
      <Link to="/">Go to Home Page</Link> {/* Chuyển hướng về Home Page */}
      <h2>Chi tiết công việc</h2>
      <h3>{todo.title}</h3>
      <p>{todo.decription}</p>
    </div>
  );
};

export default AboutPage;
