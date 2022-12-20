import Video from "../model/Video.js";

class VideoController {
    static listVideos = (req, res) => {
        Video.find((err, videos) => {
            if(err) {
                res.status(500).send({ message: "Videos not found"});
            } else {
                res.status(200).json(videos);
            }
        })
    }

    static listVideosById = (req, res) => {
        const { id } = req.params;

        Video.findById(id, (err, video) => {
            if(err) {
                res.status(500).send({ message: "Video not found"});
            } else {
                res.status(200).send(video)
            }
        })
    }

    static createVideo = (req, res) => {
        const video = new Video(req.body);
        video.save(err => {
            if(err) {
                res.status(400).send({message: "cannot create a new video"});
            } else {
                res.status(200).json(video.toJSON());
            }
        })
    }
}

export default VideoController;