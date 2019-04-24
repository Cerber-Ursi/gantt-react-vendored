var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import { bind, clear } from 'size-sensor';
var ReactGantt = /** @class */ (function (_super) {
    __extends(ReactGantt, _super);
    function ReactGantt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ganttRef = React.createRef();
        _this.ganttInst = null;
        return _this;
    }
    ReactGantt.prototype.componentDidMount = function () {
        this.renderFrappeGanttDOM();
    };
    // redraw the gantt when update. now change the viewMode
    ReactGantt.prototype.componentDidUpdate = function (prevProps) {
        if (this.ganttInst) {
            this.ganttInst.refresh(this.props.tasks);
            if (this.props.view_mode && this.props.view_mode !== prevProps.view_mode) {
                this.ganttInst.change_view_mode(this.props.view_mode);
            }
        }
        else if (this.ganttRef.current) {
            this.renderFrappeGanttDOM();
        }
    };
    ReactGantt.prototype.componentWillUnmount = function () {
        if (this.ganttRef.current) {
            clear(this.ganttRef.current); // hack to get around not-so-correct types
        }
    };
    ReactGantt.prototype.render = function () {
        return (React.createElement("svg", { ref: this.ganttRef }));
    };
    /**
     * render the gantt chart
     */
    ReactGantt.prototype.renderFrappeGanttDOM = function () {
        var _this = this;
        // init the Gantt
        // if exist, return
        if (this.ganttInst) {
            return this.ganttInst;
        }
        if (this.ganttRef.current) {
            var _a = this.props, tasks = _a.tasks, innerProps = __rest(_a, ["tasks"]);
            // when resize
            bind(this.ganttRef.current, // hack to get around not-so-correct types
            function () {
                if (_this.ganttInst) {
                    _this.ganttInst.refresh(_this.props.tasks);
                }
            });
            // new instance
            this.ganttInst = new this.props.renderer(this.ganttRef.current, tasks, innerProps);
            return this.ganttInst;
        }
        return null;
    };
    return ReactGantt;
}(React.Component));
export default ReactGantt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU8xQztJQUF3Qyw4QkFBdUI7SUFBL0Q7UUFBQSxxRUEyREM7UUExRFcsY0FBUSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQWlCLENBQUM7UUFDNUMsZUFBUyxHQUFpQixJQUFJLENBQUM7O0lBeUQzQyxDQUFDO0lBdkRHLHNDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCx3REFBd0Q7SUFDeEQsdUNBQWtCLEdBQWxCLFVBQW1CLFNBQWlCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLFNBQVMsRUFBRTtnQkFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQzlCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVELHlDQUFvQixHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBaUMsQ0FBQyxDQUFDLENBQUMsMENBQTBDO1NBQ3JHO0lBQ0wsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxPQUFPLENBQ0gsNkJBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FDN0IsQ0FBQztJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNLLHlDQUFvQixHQUE1QjtRQUFBLGlCQXVCQztRQXRCRyxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQU0sZUFBbUMsRUFBbEMsZ0JBQUssRUFBRSxrQ0FBMkIsQ0FBQztZQUUxQyxjQUFjO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBaUMsRUFBRSwwQ0FBMEM7WUFDNUY7Z0JBQ0ksSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO29CQUNoQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM1QztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRVAsZUFBZTtZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbkYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQTNERCxDQUF3QyxLQUFLLENBQUMsU0FBUyxHQTJEdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJpbmQsIGNsZWFyIH0gZnJvbSAnc2l6ZS1zZW5zb3InO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBQYXJ0aWFsPElPcHRpb25zPiB7XHJcbiAgICByZW5kZXJlcjogdHlwZW9mIEdhbnR0O1xyXG4gICAgdGFza3M6IElUYXNrW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0R2FudHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPiB7XHJcbiAgICBwcml2YXRlIGdhbnR0UmVmID0gUmVhY3QuY3JlYXRlUmVmPFNWR1NWR0VsZW1lbnQ+KCk7XHJcbiAgICBwcml2YXRlIGdhbnR0SW5zdDogR2FudHQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlckZyYXBwZUdhbnR0RE9NKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVkcmF3IHRoZSBnYW50dCB3aGVuIHVwZGF0ZS4gbm93IGNoYW5nZSB0aGUgdmlld01vZGVcclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IElQcm9wcykge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbnR0SW5zdCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbnR0SW5zdC5yZWZyZXNoKHRoaXMucHJvcHMudGFza3MpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy52aWV3X21vZGUgJiYgdGhpcy5wcm9wcy52aWV3X21vZGUgIT09IHByZXZQcm9wcy52aWV3X21vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FudHRJbnN0LmNoYW5nZV92aWV3X21vZGUodGhpcy5wcm9wcy52aWV3X21vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbnR0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJGcmFwcGVHYW50dERPTSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW50dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNsZWFyKHRoaXMuZ2FudHRSZWYuY3VycmVudCBhcyBFbGVtZW50IGFzIEhUTUxFbGVtZW50KTsgLy8gaGFjayB0byBnZXQgYXJvdW5kIG5vdC1zby1jb3JyZWN0IHR5cGVzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3ZnIHJlZj17dGhpcy5nYW50dFJlZn0vPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW5kZXIgdGhlIGdhbnR0IGNoYXJ0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVuZGVyRnJhcHBlR2FudHRET00oKTogR2FudHQgfCBudWxsIHtcclxuICAgICAgICAvLyBpbml0IHRoZSBHYW50dFxyXG4gICAgICAgIC8vIGlmIGV4aXN0LCByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5nYW50dEluc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2FudHRJbnN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FudHRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB7dGFza3MsIC4uLmlubmVyUHJvcHN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgICAgIC8vIHdoZW4gcmVzaXplXHJcbiAgICAgICAgICAgIGJpbmQodGhpcy5nYW50dFJlZi5jdXJyZW50IGFzIEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQsIC8vIGhhY2sgdG8gZ2V0IGFyb3VuZCBub3Qtc28tY29ycmVjdCB0eXBlc1xyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbnR0SW5zdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbnR0SW5zdC5yZWZyZXNoKHRoaXMucHJvcHMudGFza3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gbmV3IGluc3RhbmNlXHJcbiAgICAgICAgICAgIHRoaXMuZ2FudHRJbnN0ID0gbmV3IHRoaXMucHJvcHMucmVuZGVyZXIodGhpcy5nYW50dFJlZi5jdXJyZW50LCB0YXNrcywgaW5uZXJQcm9wcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdhbnR0SW5zdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl19