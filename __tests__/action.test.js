import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as actions from '../client/actions/example_action';
// import getPostsMock from './mockRes.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getPosts actions', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('creates GET_POSTS_SUCCESS after successfuly fetching postse', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getFakePosts
      });
    });

    const expectedActions = [
      { type: actions.ITEMS_IS_LOADING, loading: true },
      { type: actions.ITEMS_FETCH_DATA_SUCCESS, meals: getFakePosts },
      { type: actions.ITEMS_HAS_ERRORED }
    ];

    const store = mockStore({ meals: {}, loading: false });

    return store.dispatch(actions.itemsFetchData('/api/ext/duck')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

let getFakePosts = {
  meals: [
    {
      idMeal: '52907',
      strMeal: 'Duck Confit',
      strCategory: 'Miscellaneous',
      strArea: 'French',
      strInstructions:
        'The day before you want to make the dish, scatter half the salt, half the garlic and half of the herbs over the base of a small shallow dish. Lay the duck legs, skin-side up, on top, then scatter over the remaining salt, garlic and herbs. Cover the duck and refrigerate overnight. This can be done up to 2 days ahead.\r\nPour the wine into a saucepan that will snugly fit the duck legs in a single layer. Brush the salt off the duck legs and place them, skin-side down, in the wine. Cover the pan with a lid and place over a medium heat. As soon as the wine starts to bubble, turn the heat down to the lowest setting and cook for 2 hours, checking occasionally that the liquid is just barely simmering. (If you own a heat diffuser, it would be good to use it here.) After 2 hours, the duck legs should be submerged in their own fat and the meat should feel incredibly tender when prodded. Leave to cool.\r\nThe duck legs are now cooked and can be eaten immediately – or you can follow the next step if you like them crisp. If you are preparing ahead, pack the duck legs tightly into a plastic container or jar and pour over the fat, but not the liquid at the bottom of the pan. Cover and leave in the fridge for up to a month, or freeze for up to 3 months. The liquid you are left with makes a tasty gravy, which can be chilled or frozen until needed.\r\nTo reheat and crisp up the duck legs, heat oven to 220C/fan 200C/gas 7. Remove the legs from the fat and place them, skin-side down, in an ovenproof frying pan. Roast for 30-40 mins, turning halfway through, until brown and crisp. Serve with the reheated gravy, a crisp salad and some crisp golden ptoatoes.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg',
      strTags: null,
      strYoutube: 'https://www.youtube.com/watch?v=MHhLJqghY-o',
      strIngredient1: 'Sea Salt',
      strIngredient2: 'Bay Leaf',
      strIngredient3: 'Garlic',
      strIngredient4: 'Thyme',
      strIngredient5: 'Duck Legs',
      strIngredient6: 'White Wine',
      strIngredient7: '',
      strIngredient8: '',
      strIngredient9: '',
      strIngredient10: '',
      strIngredient11: '',
      strIngredient12: '',
      strIngredient13: '',
      strIngredient14: '',
      strIngredient15: '',
      strIngredient16: '',
      strIngredient17: '',
      strIngredient18: '',
      strIngredient19: '',
      strIngredient20: '',
      strMeasure1: 'Handful',
      strMeasure2: '4',
      strMeasure3: '4 cloves',
      strMeasure4: 'Handful',
      strMeasure5: '4',
      strMeasure6: '100ml',
      strMeasure7: '',
      strMeasure8: '',
      strMeasure9: '',
      strMeasure10: '',
      strMeasure11: '',
      strMeasure12: '',
      strMeasure13: '',
      strMeasure14: '',
      strMeasure15: '',
      strMeasure16: '',
      strMeasure17: '',
      strMeasure18: '',
      strMeasure19: '',
      strMeasure20: '',
      strSource:
        'https://www.bbcgoodfood.com/recipes/2085/barneys-confit-of-duck',
      dateModified: null
    },
    {
      idMeal: '52838',
      strMeal: 'Venetian Duck Ragu',
      strCategory: 'Pasta',
      strArea: 'Italian',
      strInstructions:
        'Heat the oil in a large pan. Add the duck legs and brown on all sides for about 10 mins. Remove to a plate and set aside. Add the onions to the pan and cook for 5 mins until softened. Add the garlic and cook for a further 1 min, then stir in the cinnamon and flour and cook for a further min. Return the duck to the pan, add the wine, tomatoes, stock, herbs, sugar and seasoning. Bring to a simmer, then lower the heat, cover with a lid and cook for 2 hrs, stirring every now and then.\r\nCarefully lift the duck legs out of the sauce and place on a plate – they will be very tender so try not to lose any of the meat. Pull off and discard the fat, then shred the meat with 2 forks and discard the bones. Add the meat back to the sauce with the milk and simmer, uncovered, for a further 10-15 mins while you cook the pasta.\r\nCook the pasta following pack instructions, then drain, reserving a cup of the pasta water, and add the pasta to the ragu. Stir to coat all the pasta in the sauce and cook for 1 min more, adding a splash of cooking liquid if it looks dry. Serve with grated Parmesan, if you like.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg',
      strTags: null,
      strYoutube: 'https://www.youtube.com/watch?v=oWQDVgjB_Lw',
      strIngredient1: 'Olive Oil',
      strIngredient2: 'Duck Legs',
      strIngredient3: 'Onions',
      strIngredient4: 'Garlic',
      strIngredient5: 'Cinnamon',
      strIngredient6: 'Plain Flour',
      strIngredient7: 'Red Wine',
      strIngredient8: 'Chopped Tomatoes',
      strIngredient9: 'Chicken Stock Cube',
      strIngredient10: 'Rosemary',
      strIngredient11: 'Bay Leaves',
      strIngredient12: 'Sugar',
      strIngredient13: 'Milk',
      strIngredient14: 'Paccheri Pasta',
      strIngredient15: 'Parmesan Cheese',
      strIngredient16: '',
      strIngredient17: '',
      strIngredient18: '',
      strIngredient19: '',
      strIngredient20: '',
      strMeasure1: '1 tbls',
      strMeasure2: '4',
      strMeasure3: '2 finely chopped',
      strMeasure4: '2 cloves minced',
      strMeasure5: '2 tsp ground',
      strMeasure6: '2 tsp',
      strMeasure7: '250ml',
      strMeasure8: '800g',
      strMeasure9: '1',
      strMeasure10: '3 sprigs',
      strMeasure11: '2',
      strMeasure12: '1 tsp ',
      strMeasure13: '2 tbs',
      strMeasure14: '600g',
      strMeasure15: 'Grated',
      strMeasure16: '',
      strMeasure17: '',
      strMeasure18: '',
      strMeasure19: '',
      strMeasure20: '',
      strSource: 'https://www.bbcgoodfood.com/recipes/venetian-duck-ragu',
      dateModified: null
    }
  ]
};
