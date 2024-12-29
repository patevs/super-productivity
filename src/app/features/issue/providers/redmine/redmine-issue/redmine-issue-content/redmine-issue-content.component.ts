import { Component, ChangeDetectionStrategy, Input, input } from '@angular/core';
import { TaskWithSubTasks } from 'src/app/features/tasks/task.model';
import { TaskService } from 'src/app/features/tasks/task.service';
import { T } from 'src/app/t.const';
import { expandAnimation } from 'src/app/ui/animations/expand.ani';
import { RedmineIssue } from '../redmine-issue.model';

@Component({
  selector: 'redmine-issue-content',
  templateUrl: './redmine-issue-content.component.html',
  styleUrls: ['./redmine-issue-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expandAnimation],
  standalone: false,
})
export class RedmineIssueContentComponent {
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
  @Input() issue?: RedmineIssue;
  readonly task = input<TaskWithSubTasks>();

  T: typeof T = T;

  constructor(private readonly _taskService: TaskService) {}

  hideUpdates(): void {
    const task = this.task();
    if (!task) {
      throw new Error('No task');
    }
    if (!this.issue) {
      throw new Error('No issue');
    }
    this._taskService.markIssueUpdatesAsRead(task.id);
  }

  trackByIndex(i: number, p: any): number {
    return i;
  }
}
