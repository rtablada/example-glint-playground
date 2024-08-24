import Component from '@glimmer/component';

export interface RegularDevSignature {
  // The arguments accepted by the component
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class RegularDev extends Component<RegularDevSignature> {}
