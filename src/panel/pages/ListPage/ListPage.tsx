import { employees, users } from '../../../data';

import './ListPage.scss';

type Props = {
  type: string;
};

export const ListPage = ({ type }: Props) => {
  let data: object = [];

  console.log(type);

  switch (type) {
    case 'Employees':
      data = employees;
      break;

    case 'Users':
      data = users;
      break;
  }

  console.log(users[0]);

  return (
    <div className="listPage">
      <h1>{`List Page - ${type}`}</h1>
    </div>
  );
};
