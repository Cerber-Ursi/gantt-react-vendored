import * as React from 'react';
import { bind, clear } from 'size-sensor';

export interface IProps extends Partial<IOptions> {
    renderer: typeof Gantt;
    tasks: ITask[];
    svgRef?: React.RefObject<SVGSVGElement>;
}

export default class ReactGantt extends React.Component<IProps> {
    private ganttRef = this.props.svgRef || React.createRef<SVGSVGElement>();
    private ganttInst: Gantt | null = null;

    componentDidMount() {
        this.renderFrappeGanttDOM();
    }

    // redraw the gantt when update. now change the viewMode
    componentDidUpdate(prevProps: IProps) {
        if (this.ganttInst) {
            this.ganttInst.refresh(this.props.tasks);
            if (this.props.view_mode && this.props.view_mode !== prevProps.view_mode) {
                this.ganttInst.change_view_mode(this.props.view_mode);
            }
        } else if (this.ganttRef.current) {
            this.renderFrappeGanttDOM();
        }
    }

    componentWillUnmount() {
        if (this.ganttRef.current) {
            clear(this.ganttRef.current);
        }
    }

    render() {
        return (
            <svg ref={this.ganttRef}/>
        );
    }

    /**
     * render the gantt chart
     */
    private renderFrappeGanttDOM(): Gantt | null {
        // init the Gantt
        // if exist, return
        if (this.ganttInst) {
            return this.ganttInst;
        }

        if (this.ganttRef.current) {
            const {tasks, ...innerProps} = this.props;

            // when resize
            bind(this.ganttRef.current,
                () => {
                    if (this.ganttInst) {
                        this.ganttInst.refresh(this.props.tasks);
                    }
                });

            // new instance
            this.ganttInst = new this.props.renderer(this.ganttRef.current, tasks, innerProps);
            return this.ganttInst;
        }
        return null;
    }
}
