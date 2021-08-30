import { CollectionViews } from './CollectionView';
import { User, UserProps } from '../../model/User';
import { UserShow } from './UserShow';

export class UserList extends CollectionViews<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
