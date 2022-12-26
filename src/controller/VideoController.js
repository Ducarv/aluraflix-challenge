import Video from "../model/Video.js";

class VideoController {
  static listVideos = (req, res) => {
    Video.find()
    .populate("category", "title")
    .exec((err, videos) => {
        if (err) {
          res.status(500).send({ message: "Videos not found" });
        } else {
          res.status(200).json(videos);
        }
    });
  };

  static listVideosById = (req, res) => {
    const { id } = req.params;

    Video.findById(id) 
    .populate("category", "title")
    .exec((err, video) => {
        if (err) {
          res.status(500).send({ message: "Video not found" });
        } else {
          res.status(200).send(video);
        }
    })
  };

  static listVideosByCategory = (req, res) => {
    const { id } = req.params;
    Video.find({ category: id }, (err, videos) => {
      if(err) {
        res.status(500).send(`Cannot found videos by id: ${err}`);
      } else {
        res.status(200).json(videos);
      }
    })
  };

  static listVideosByTitle = (req, res) => {
     const { search } = req.query;
     Video.find({ title: search }, (err, videos) => {
      if(err) {
        res.status(500).send(`Cannot found video, ${err}`);
      } else {
        res.status(200).json(videos);
      }
     })
  }

  static createVideo = (req, res) => {
    const video = new Video(req.body);
    video.save((err) => {
      if (err) {
        res.status(400).send({ message: "cannot create a new video" });
      } else {
        res.status(200).json(video.toJSON());
      }
    });
  };

  static updateVideoById = (req, res) => {
    const { id } = req.params;
    Video.findByIdAndUpdate(id, { $set: req.body }, (err, videos) => {
      if (err) {
        res.status(500).send({ message: "You cannot update this video" });
      } else {
        res.status(200).send({ message: `Video updated` });
      }
    });
  };

  static deleteVideoById = (req, res) => {
    const { id } = req.params;
    Video.findByIdAndDelete(id, (err, videos) => {
      if (err) {
        res.status(500).send({ message: `cannot delete this video` });
      } else {
        res.status(200).send({ message: "Video deleted" });
      }
    });
  };
}

export default VideoController;
