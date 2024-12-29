import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TaskWithSubTasks } from '../../../../../tasks/task.model';
import { isOnline$ } from 'src/app/util/is-online';
import { Observable } from 'rxjs';

@Component({
  selector: 'jira-issue-header',
  templateUrl: './jira-issue-header.component.html',
  styleUrls: ['./jira-issue-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class JiraIssueHeaderComponent {
  readonly task = input<TaskWithSubTasks>();
  isOnline$: Observable<boolean> = isOnline$;

  constructor() {}
}
