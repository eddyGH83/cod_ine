import { Component, OnInit } from '@angular/core';



interface MenuItem {
  label?: string;
  icon?: string;
  command?: (event?: any) => void;
  url?: string;
  items?: MenuItem[];
  expanded?: boolean;
  disabled?: boolean;
  visible?: boolean;
  target?: string;
  escape?: boolean;
  routerLinkActiveOptions?: any;
  separator?: boolean;
  badge?: string;
  tooltip?: string;
  tooltipPosition?: string;
  badgeStyleClass?: string;
  style?: any;
  styleClass?: string;
  title?: string;
  id?: string;
  automationId?: any;
  tabindex?: string;
  routerLink?: any;
  queryParams?: {
      [k: string]: any;
  };
  fragment?: string;
  queryParamsHandling?: string;
  preserveFragment?: boolean;
  skipLocationChange?: boolean;
  replaceUrl?: boolean;
  iconStyle?: any;
  iconClass?: string;
  state?: {
      [k: string]: any;
  };
  tooltipOptions?: {
      tooltipLabel?: string;
      tooltipPosition?: string;
      tooltipEvent?: string;
      appendTo?: any;
      positionStyle?: string;
      tooltipStyleClass?: string;
      tooltipZIndex?: string;
      escape?: boolean;
      disabled?: boolean;
      positionTop?: number;
      positionLeft?: number;
      showDelay?: number;
      hideDelay?: number;
      life?: number;
  };
}



@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html'
})
export class Reporte1Component implements OnInit {
  items: MenuItem[];

  cardMenu: MenuItem[];



  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'cat_caeb', icon: 'pi pi-map', routerLink: ['/reportes/reporte1']},
      {label: 'cat_cob', icon: 'pi pi-map', routerLink: ['/reportes/reporte1']},
      {label: 'cat_idioma', icon: 'pi pi-map', routerLink: ['/reportes/reporte1']},
      {label: 'cat_npioc', icon: 'pi pi-map', routerLink: ['/reportes/reporte1']},
      {label: 'cat_pais', icon: 'pi pi-map', routerLink: ['/reportes/reporte1']},
      {label: 'cat_municipio', icon: 'pi pi-map', routerLink: ['/reportes/reporte1']}
  ];

  this.cardMenu = [
      {
          label: 'Save', icon: 'pi pi-fw pi-check'
      },
      {
          label: 'Update', icon: 'pi pi-fw pi-refresh'
      },
      {
          label: 'Delete', icon: 'pi pi-fw pi-trash'
      },
  ];
  }

}
