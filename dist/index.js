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
        _this.ganttRef = _this.props.svgRef || React.createRef();
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
            clear(this.ganttRef.current);
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
            bind(this.ganttRef.current, function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVExQztJQUF3Qyw4QkFBdUI7SUFBL0Q7UUFBQSxxRUEyREM7UUExRFcsY0FBUSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQWlCLENBQUM7UUFDakUsZUFBUyxHQUFpQixJQUFJLENBQUM7O0lBeUQzQyxDQUFDO0lBdkRHLHNDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCx3REFBd0Q7SUFDeEQsdUNBQWtCLEdBQWxCLFVBQW1CLFNBQWlCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLFNBQVMsRUFBRTtnQkFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQzlCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVELHlDQUFvQixHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FDSCw2QkFBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUM3QixDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0sseUNBQW9CLEdBQTVCO1FBQUEsaUJBdUJDO1FBdEJHLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN6QjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBTSxlQUFtQyxFQUFsQyxnQkFBSyxFQUFFLGtDQUEyQixDQUFDO1lBRTFDLGNBQWM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQ3RCO2dCQUNJLElBQUksS0FBSSxDQUFDLFNBQVMsRUFBRTtvQkFDaEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDNUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVQLGVBQWU7WUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ25GLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN6QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUEzREQsQ0FBd0MsS0FBSyxDQUFDLFNBQVMsR0EyRHREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBiaW5kLCBjbGVhciB9IGZyb20gJ3NpemUtc2Vuc29yJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUGFydGlhbDxJT3B0aW9ucz4ge1xyXG4gICAgcmVuZGVyZXI6IHR5cGVvZiBHYW50dDtcclxuICAgIHRhc2tzOiBJVGFza1tdO1xyXG4gICAgc3ZnUmVmPzogUmVhY3QuUmVmT2JqZWN0PFNWR1NWR0VsZW1lbnQ+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdEdhbnR0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xyXG4gICAgcHJpdmF0ZSBnYW50dFJlZiA9IHRoaXMucHJvcHMuc3ZnUmVmIHx8IFJlYWN0LmNyZWF0ZVJlZjxTVkdTVkdFbGVtZW50PigpO1xyXG4gICAgcHJpdmF0ZSBnYW50dEluc3Q6IEdhbnR0IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJGcmFwcGVHYW50dERPTSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlZHJhdyB0aGUgZ2FudHQgd2hlbiB1cGRhdGUuIG5vdyBjaGFuZ2UgdGhlIHZpZXdNb2RlXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBJUHJvcHMpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW50dEluc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW50dEluc3QucmVmcmVzaCh0aGlzLnByb3BzLnRhc2tzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudmlld19tb2RlICYmIHRoaXMucHJvcHMudmlld19tb2RlICE9PSBwcmV2UHJvcHMudmlld19tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbnR0SW5zdC5jaGFuZ2Vfdmlld19tb2RlKHRoaXMucHJvcHMudmlld19tb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW50dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRnJhcHBlR2FudHRET00oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FudHRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjbGVhcih0aGlzLmdhbnR0UmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHN2ZyByZWY9e3RoaXMuZ2FudHRSZWZ9Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVuZGVyIHRoZSBnYW50dCBjaGFydFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlbmRlckZyYXBwZUdhbnR0RE9NKCk6IEdhbnR0IHwgbnVsbCB7XHJcbiAgICAgICAgLy8gaW5pdCB0aGUgR2FudHRcclxuICAgICAgICAvLyBpZiBleGlzdCwgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FudHRJbnN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdhbnR0SW5zdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbnR0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3Qge3Rhc2tzLCAuLi5pbm5lclByb3BzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgICAgICAvLyB3aGVuIHJlc2l6ZVxyXG4gICAgICAgICAgICBiaW5kKHRoaXMuZ2FudHRSZWYuY3VycmVudCxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW50dEluc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW50dEluc3QucmVmcmVzaCh0aGlzLnByb3BzLnRhc2tzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5ldyBpbnN0YW5jZVxyXG4gICAgICAgICAgICB0aGlzLmdhbnR0SW5zdCA9IG5ldyB0aGlzLnByb3BzLnJlbmRlcmVyKHRoaXMuZ2FudHRSZWYuY3VycmVudCwgdGFza3MsIGlubmVyUHJvcHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nYW50dEluc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==