import Component from '@glimmer/component';

export interface UsesTsSignature {
  // The arguments accepted by the component
  Args: {
    requiredString: string;
    requiredNumber: number;
    requiredBoolean: boolean;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class UsesTs extends Component<UsesTsSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    UsesTs: typeof UsesTs;
  }
}
