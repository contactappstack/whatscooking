
const initialState = {
    users:[
        {
            id : 0,
            thumbnail : "https://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/1512423191/120417-ashton-kutcher-slide.jpg?itok=eaNnb5KP",
            username : "Ashton Kutcher",
            imageurls : [
                 "https://fortunedotcom.files.wordpress.com/2015/09/gettyimages-470408528.jpg",
                "https://h2savecom.files.wordpress.com/2018/01/taco-bell-nacho-fries1.jpg?w=1024&h=668"
            ],
            recipeTitle : "Recipe 1",
            recipeBody : "This is the body for recipe 1"
        },
        {
             id : 1,
             thumbnail : "https://image.afcdn.com/album/D20150130/476575315-916217_H172213_L.jpg",
             username : "Leo DiCaprio",
             imageurls : [
                 "https://i.ndtvimg.com/i/2015-10/urlai-roast_625x350_71444723419.jpg"
             ],
             recipeTitle : "Recipe 2",
             recipeBody : "This is the body for recipe 2"
         },
         {
             id : 2,
             thumbnail : "https://i2-prod.mirror.co.uk/incoming/article9966916.ece/ALTERNATES/s615/PROD-Katy-Perry.jpg",
             username : "katy Perry",
             imageurls : [
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdEajbL8bJNMC99WQYx5LuozFJMD4ouvMXjbNYS8CrMEVdfY6KA"
             ],
             recipeTitle : "Recipe 3",
             recipeBody : "This is the body for recipe 3"
         },
         {
             id : 3,
             thumbnail : "https://media1.popsugar-assets.com/files/thumbor/0OMfCqYqiUgXJvjLp-UNBMyaNBM/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/03/08/692/n/1922398/3c673e6258c02532a17111.63722636_edit_img_cover_file_43281164_1488986466/i/Celebrities-Celebrating-International-Women-Day-2017.jpg",
             username : "Emma Watson",
             imageurls : [
                 "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1524072647%2Flos-angeles-street-food2-FT-BLOG0418.jpg%3Fitok%3DqXfBPT-Z&w=700&q=85"
             ],
             recipeTitle : "Recipe 4",
             recipeBody : "This is the body for recipe 4"
         },
         {
             id : 4,
             thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzamIYDvcNmqVrs1hu3KyFzaF1y5RcKzxU59vRVCehvNJvK8F1",
             username : "Will Smith",
             imageurls : [
                 "http://thepunekar.com/wp-content/uploads/2017/06/MIXED-SEA-FOOD-MOILEE-SPAGHETTI-MIXED-SEA-FOOD-MOILEE-SPAGHETTI-.-1024x1024.jpg"
             ],
             recipeTitle : "Recipe 5",
             recipeBody : "This is the body for recipe 5"
         },
    ]
}

const reducer = (state=initialState) => {
    return state
}

export default reducer;