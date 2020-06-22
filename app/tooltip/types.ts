import {RiotComponentExport} from 'riot'

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left'

export enum TooltipContentType {
  Text, Image
}

export interface TooltipComponentState {
  active: boolean
}

export interface TooltipComponentProps {
  position: TooltipPosition;
  content: string;
  contentType?: TooltipContentType;
}

export interface TooltipComponent extends RiotComponentExport<TooltipComponentProps, TooltipComponentState> {
  state: TooltipComponentState;
}
