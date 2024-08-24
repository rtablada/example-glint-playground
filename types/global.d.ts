import '@glint/environment-ember-loose';

import type EmberPageTitleTemplateRegistry from 'ember-page-title/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends EmberPageTitleTemplateRegistry {}
}
