const fakeUser = {
    username:"Peggy",
    loggedIn:false,
}

export const trending = (req,res) => {
    const videos = [
        {
            title: "First video",
            rating: 5,
            comments: 2,
            createdAt: "4 minutes ago",
            views: 17,
            id: 1,
        },
        {
            title: "Second video",
            rating: 5,
            comments: 2,
            createdAt: "4 minutes ago",
            views: 17,
            id: 2,
        },
        {
            title: "Third video",
            rating: 5,
            comments: 2,
            createdAt: "4 minutes ago",
            views: 17,
            id: 3,
        },
    ];
    return res.render("home", {pageTitle:"Home", fakeUser, videos});
};
export const watch = (req,res) => res.render("watch");
export const edit = (req,res) => res.render("edit");
export const search = (req,res) => res.send("Search Video");
export const upload = (req,res) => res.send("Upload Video");
export const deleteVideo = (req,res) => res.send("Delete Video");