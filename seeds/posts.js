
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, user_id: 1, title:'Free apples', content:'Free apples can be picked up at my home. We have more than we can use!', category:'food', expdate:'1538274302', created: '1537755902'},
        {id: 2, user_id: 2, title:'Need help carrying firewood up to house', content:'My hosue is located up a fair few steps and I would like some help carrying the firewood up. Will pay a living wage and provide a filling lunch and takeaway dinner', category:'work', expdate:'1538187902', created: '1537759902'},
        {id: 3, user_id: 1, title:'Work boots size 10', content:'Got a pair of workboots size 10 to give away. Get in touch if you can use these.', category:'goods', expdate:'1538101502', created: '1537765902'},
        {id: 4, user_id: 2, title:'BBQ', content:'I am organising a BBQ for those that do not have a fixed address. No need to bring anything, everything provided. This is an alcohol free event. Get in touch to RSVP', category:'food', expdate:'1538015102', created: '1537761902'},
        {id: 5, user_id: 1, title:'Gardening at Salvation Army', content:'The local Salvation Army needs help with gardening. In return you will be given a meal and a small hourly wage.', category:'work', expdate:'1537928702', created: '1537763902'},
      ]);
    });
};
