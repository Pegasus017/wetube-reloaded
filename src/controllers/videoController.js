const fakeUser = {
    username:"Peggy",
    loggedIn:false,
}

let videos = [
    {
        title: "First video",
        rating: 5,
        comments: 2,
        createdAt: "4 minutes ago",
        views: 1,
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

export const trending = (req,res) => {
    return res.render("home", {pageTitle:"Home", fakeUser, videos});
};
export const watch = (req,res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("watch", {pageTitle:`Watching ${video.title}`, fakeUser, video});
};
export const getEdit = (req,res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("edit", {pageTitle:`Editing ${video.title}` , fakeUser, video});
};
export const postEdit = (req,res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`);
};


export const search = (req,res) => res.send("Search Video");
export const upload = (req,res) => res.send("Upload Video");
export const deleteVideo = (req,res) => res.send("Delete Video");