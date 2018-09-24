
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, posts_id: '1', message: 'Hey mate, I am keen on some free apples. My mobile number is 0210568942', date: '153775'},
        {id: 2, posts_id: '1', message: 'Hello, I would like some apples as well if you still have some left, my number is 022 4354 234, thanks!', date: '1537759'},
        {id: 3, posts_id: '2', message: 'Hi, I could help you out with the wood, please give me a buzz on 021 834 3482', date: '1537759'}
      ]);
    });
};
