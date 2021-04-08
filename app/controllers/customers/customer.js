import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveCustomer() {
            await this.model.save();
            this.transitionToRoute('customers.index');
        }
    }
});