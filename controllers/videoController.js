import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        throw Error("Empty videos");
        res.render("home", {
            pageTitle: "Home",
            videos
        });
    } catch (error) {
        console.log(error);
        res.render("home", {
            pageTitle: "Home",
            videos: []
        });
    }
};

export const search = async (req, res) => {
    const {
        query: {
            term: searchingBy
        }
    } = req;
    try {
        const videos = await Video.find({});
        throw Error("Empty videos");
        res.render("search", {
            pageTitle: "Search",
            searchingBy,
            videos
        });
    } catch (error) {
        console.log(error);
        res.render("search", {
            pageTitle: "Search",
            searchingBy,
            videos
        });
    }
};

export const getUpload = (req, res) =>
    res.render("upload", {
        pageTitle: "Upload"
    });

export const postUpload = async (req, res) => {
    const {
        body: {
            title,
            description
        },
        file: {
            path
        }
    } = req
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    })
    //     res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) =>
    res.render("videoDetail", {
        pageTitle: "Video Detail"
    });

export const editVideo = (req, res) =>
    res.render("editVideo", {
        pageTitle: "Edit Video"
    });

export const deleteVideo = (req, res) =>
    res.render("deleteVideo", {
        pageTitle: "Delete Video"
    });