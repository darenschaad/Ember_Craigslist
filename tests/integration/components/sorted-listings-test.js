import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sorted-listings', 'Integration | Component | sorted listings', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sorted-listings}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sorted-listings}}
      template block text
    {{/sorted-listings}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
