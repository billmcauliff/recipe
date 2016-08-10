// FlowRouter.route('/', {
//     name: 'home',
//     action() {
//         BlazeLayout.render('HomeLayout');
//     }
// });


FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('HomeLayout');
    },
    name: 'home'
});


// FlowRouter.route('/recipe-book', {
//     name: 'recipe-book',
//     action() {
//         BlazeLayout.render('MainLayout', {main: 'Recipes'});
//     }
// });

FlowRouter.route('/recipe-book', {
    action: function() {
        BlazeLayout.render('MainLayout', {
            main: 'Recipes'
        });
    },
    name: 'recipe-book'
});



// FlowRouter.route('/recipe/:id', {
//     name: 'recipe-single',
//     action() {
//         BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
//     }
// });