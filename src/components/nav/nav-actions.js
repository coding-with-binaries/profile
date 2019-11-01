import { Book, Briefcase, Task } from 'grommet-icons';
import Routes from '../../constants/routes';
import Texts from '../../constants/text-en';

export default [
  {
    title: Texts.TITLE_SKILLS,
    to: Routes.SKILLS,
    icon: Task
  },
  {
    title: Texts.TITLE_EXPERIENCE,
    to: Routes.EXPERIENCE,
    icon: Briefcase
  },
  {
    title: Texts.TITLE_EDUCATION,
    to: Routes.EDUCATION,
    icon: Book
  }
];
