+++
title = "Ads Decoder"
date = 2021-02-01
draft = false
description="Generating Symbolic Bounding Boxes and Labels for the given Images and Descriptors."
github="https://github.com/yuhueilee/Ads-Decoder"
+++

Ads Decoder: Generating Symbolic Bounding Boxes and Labels for the given Images and Descriptors

This project focuses on combining the image features with the text descriptor and predict the symbolic regions with labels that draws the audience's attention. The idea of combining text embeddings with image features extracted by the image classifier is inspired from the [VQA](https://github.com/Shivanshu-Gupta/Visual-Question-Answering) model.

Tech stack: `Python, PyTorch (Faster R-CNN), scikit-learn, Gensim/TextBlob, pycocotools, Conda, SLURM (HPC/MASSIVE M3)`


## Example output
{{< figure 
  src="/images/ads-decoder/1.png" 
  alt="Sample image 1" 
  class="project-image"
>}}

{{< figure 
  src="/images/ads-decoder/2.png" 
  alt="Sample image 2" 
  class="project-image"
>}}
