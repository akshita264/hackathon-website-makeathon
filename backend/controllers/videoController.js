exports.buildVideo = async (req, res) => {
  try {
    const { script, impairment } = req.body;

    const audioPath = "generated/audio/audio.mp3";
    const videoPath = "generated/video/video.mp4";

    if (impairment !== "deaf") {
      await generateSpeech(script, audioPath);
    }

    await createVideo(
      "generated/slide.png",
      audioPath,
      videoPath,
      impairment
    );

    res.json({ video: videoPath });

  } catch (err) {
    console.log(err);
    res.status(500).send("Video build failed");
  }
};  