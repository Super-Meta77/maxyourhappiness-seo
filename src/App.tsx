import React from 'react';
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="bg-secondary font-sans text-base">
      <section
        className="hero-1 relative flex h-screen items-center justify-center bg-black"
      >
        {/* <!-- bg-overlay-img --> */}
        <div className="bg-overlay inset-0 overflow-hidden">
          <div className="h-full w-full">
            <img
              className="h-full w-full object-cover"
              src="images/newpic.webp"
              alt="newpic"
            />
          </div>
        </div>
        <div className="container mx-auto px-4" style={{maxWidth: "1140px", zIndex:"1000"}}>
          <div className="flex justify-center">
            <div className="w-full lg:w-9/12">
              <div className="hero-wrapper text-center text-white/50">
                <h1
                className="hero-1-title mb-6 text-[3.5rem] font-light leading-tight text-white"
                >
                  Have You Stopped Enjoying Life and Now You Try Not To Think
                  About It?
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4" style={{maxWidth: "1140px"}}>
          <hr className="my-4 opacity-0" />
          <div className="flex flex-col items-center lg:flex-row">
            <div className="order-2 mt-4 lg:order-1 lg:mt-0 lg:w-5/12">
              <h4 className="text-xl font-bold" style={{fontSize: "32px"}}>
                Have Any Of These Happened To You?
              </h4>
              <br />
              <div id="auto-scroll-trigger" className="h-px"></div>

              <div id="auto-scroll-div" className="scroll-container">
                <div className="scroll-content">
                  <p className="text-gray-600" style={{fontSize: "20px", color: "black"}}>
                    <strong>Emmett:"</strong>...And I would pick what would be
                    probably the worst person in the world to do a relationship
                    with..."
                  </p>
                  <br />
                  <p className="text-gray-600" style={{fontSize: "20px", color: "black"}}>
                    <strong>Vivian"</strong>I'd be upset all of a sudden for no
                    reason. I don't know why. And I'm like, That was weird. Why
                    did I act like that?..."
                  </p>
                  <br />
                  <p className="text-gray-600" style={{fontSize: "20px", color: "black"}}>
                    (more on the video)
                  </p>
                  <br />
                  <p className="text-gray-600" style={{fontSize: "20px", color: "black"}}>
                    <strong>There Is An Answer... And It Will Change Your Life.</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 w-full lg:order-2 lg:w-6/12 lg:ml-auto">
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src="images/WhatsApp-Image-2024-11-20-at-1.30.00-PM.webp"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="992060811"
                />
                <button className="play-button" data-video-id="992060811" value="992060811">
                  <img
                  src="images/play.png"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466373"
                  style={{ width: "20px", height: "20px"}}
                  />
                </button>
              </div>
            </div>
          </div>

          <hr className="hr-2 my-4" />
          <hr className="hr-3 my-4" />
          <div className="relative flex justify-center">
            <div className="border-t border-blue-100 w-full absolute top-1/2 transform -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
              <img
                src="images/arrow-down.png"
                alt="Video Thumbnail"
                className="h-full w-full object-contain cursor-pointer"
                data-video-id="998466373"
                style={{ width: "20px", height: "20px"}}
                />
            </div>
          </div>
          <hr className="hr-4 my-4" />

          <div className="flex flex-col items-center lg:flex-row">
            <div className="w-full lg:w-6/12">
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src="images/Vivian-Problem-With-Relationships.webp"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466373"
                />
                <button className="play-button" data-video-id="998466373" value="998466373">
                 <img
                    src="images/play.png"
                    alt="Video Thumbnail"
                    className="h-full w-full object-contain cursor-pointer"
                    data-video-id="998466373"
                    style={{ width: "40px", height: "40px"}}
                    />
                </button>
              </div>
            </div>
            <div className="mt-4 lg:mt-0 lg:w-5/12 lg:ml-auto">
              <h4
                className="text-xl font-bold"
                style={{fontSize: "32px"}}
              >
                Problem With Relationships?
              </h4>
              <p className="mt-3 text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>BEFORE</strong><br />
                I'd been dating this guy who was not a great guy, and I'd been
                with him for about five years and I could not let go of him. I
                couldn't. I knew he was wrong for me. I knew I didn't actually
                want to be with him, but I couldn't not be with him. It was like
                out of my control.
              </p>

              <p className="mt-3 text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>AFTER</strong><br />
                So I was actually able to realize, No, I don't want to be with
                this guy and I can stop being with him. And I was able to put an
                end to that and move on with my life and opened the door to
                actually having a great relationship with my husband. It was a big
                part of me having three wonderful births. My kids are amazing. Of
                course, every mom says that, but they really, truly are. And
                everything I read in that book is part of what I do.
              </p>
            </div>
          </div>

          <hr className="hr-2 my-4" />
          <hr className="hr-3 my-4" />
          <div className="relative flex justify-center">
            <div className="border-t border-blue-100 w-full absolute top-1/2 transform -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
                <img
                  src="images/arrow-down.png"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466373"
                  style={{ width: "20px", height: "20px"}}
                  />
            </div>
          </div>
          <hr className="hr-4 my-4" />

          <div className="flex flex-col items-center lg:flex-row">
            <div className="order-2 mt-4 lg:order-1 lg:mt-0 lg:w-5/12">
              <h4 className="text-xl font-bold" style={{fontSize: "32px"}}>
                What Is The True Source of Anxiety?
              </h4>
              <p className="mt-3 text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>BEFORE</strong><br />
                There was an injury, you know, when I was a kid, cut my knee open.
                It wasn't the knee that was painful. The painful part was the
                embarrassment, because the girl that I had a crush on was there
                and saw me being tended to. It was that feeling of helpless. That
                actually is what stuck with me. The reactive mind was just
                connecting it. Here's a girl. Here's a moment of you being weak.
                You have to be stronger. You have to do this. You have to build
                walls. You have to be a man. You have to be. So, we get to the
                root of it.
              </p>

              <p className="mt-3 text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>AFTER</strong><br />
                Boom! All that, that connection just releases. It's gone. I came
                out of there calm. I was just me. I said, Hey, everyone, I'm just
                me.
              </p>
            </div>
            <div className="order-1 w-full lg:order-2 lg:w-6/12 lg:ml-auto">
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src="images/Brent-Anxiety.webp"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466432"
                />
                <button className="play-button" data-video-id="998466432" value="998466432">
                  <img
                    src="images/play.png"
                    alt="Video Thumbnail"
                    className="h-full w-full object-contain cursor-pointer"
                    data-video-id="998466373"
                    style={{ width: "40px", height: "40px"}}
                    />
                </button>
              </div>
            </div>
          </div>

          <hr className="hr-2 my-4" />
          <hr className="hr-3 my-4" />
          <div className="relative flex justify-center">
            <div className="border-t border-blue-100 w-full absolute top-1/2 transform -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
                <img
                  src="images/arrow-down.png"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466373"
                  style={{ width: "20px", height: "20px"}}
                  />
            </div>
          </div>
          <hr className="hr-4 my-4" />

          <div className="flex flex-col items-center lg:flex-row">
            <div className="w-full lg:w-6/12">
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src="images/Carmel-Can-You-Conquer-Your-Fears.webp"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466468"
                />
                <button className="play-button" data-video-id="998466468"  value="998466468">
                  <img
                    src="images/play.png"
                    alt="Video Thumbnail"
                    className="h-full w-full object-contain cursor-pointer"
                    data-video-id="998466373"
                    style={{ width: "40px", height: "40px"}}
                    />
                </button>
              </div>
            </div>
            <div className="mt-4 lg:mt-0 lg:w-5/12 lg:ml-auto">
              <h4 className="text-xl font-bold" style={{fontSize: "32px"}}>
                Can't Let Go of Your Fears?
              </h4>
              <p className="mt-3 text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>BEFORE</strong><br />
                I was so insecure, I had no friends. I just wanted to be liked.
                And I was just really, you know, introverted and I wanted to be a
                singer. And I couldn't I could barely talk to people.
              </p>

              <p className="mt-3 text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>AFTER</strong><br />
                So I have I can communicate with people. I can get up on stage and
                not be shy. I have friends, tons of friends all over the world,
                and I don't have problems making friends at all. It's completely
                different. I don't know how people live without this. Not even
                kidding.
              </p>
            </div>
          </div>

          <hr className="hr-2 my-4" />
          <hr className="hr-3 my-4" />
          <div className="relative flex justify-center">
            <div className="border-t border-blue-100 w-full absolute top-1/2 transform -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
                <img
                  src="images/arrow-down.png"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466373"
                  style={{ width: "20px", height: "20px"}}
                  />
            </div>
          </div>
          <hr className="hr-4 my-4" />

          <div className="flex flex-col items-center lg:flex-row">
            <div className="order-2 mt-4 lg:order-1 lg:mt-0 lg:w-5/12">
              <h4 className="text-xl font-bold" style={{fontSize: "32px"}}>
                Can't Let Go of Your Losses?
              </h4>
              <p className="mt-3 text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>BEFORE</strong><br />
                Had several losses. My mom died of cancer. My dad committed
                suicide. And then I lost a son. I lost a baby. I mean, I was
                constantly crying. I mean, a commercial would come on and I would
                cry. I would see something and I would cry.
              </p>

              <p className="mt-3 text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>AFTER</strong><br />
                …and I could start to breathe and I could start to work again. I'm
                not moving through mud because I felt like because of all of the
                losses that I had in my life, I was moving through mud. And now I
                can actually breathe and look and I have a joy and excitement and
                I have like just this energy, this dynamic drive that I just
                didn't have before.
              </p>
            </div>
            <div className="order-1 w-full lg:order-2 lg:w-6/12 lg:ml-auto">
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src="images/Julie-Cant-Let-Go-Of-Your-Loss.webp"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466485"
                />
                <button className="play-button" data-video-id="998466485"   value="998466485">
                  <img
                    src="images/play.png"
                    alt="Video Thumbnail"
                    className="h-full w-full object-contain cursor-pointer"
                    data-video-id="998466373"
                    style={{ width: "40px", height: "40px"}}
                    />
                </button>
              </div>
            </div>
          </div>

          <hr className="hr-2 my-4" />
          <hr className="hr-3 my-4" />
          <div className="relative flex justify-center">
            <div className="border-t border-blue-100 w-full absolute top-1/2 transform -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
                <img
                  src="images/arrow-down.png"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466373"
                  style={{ width: "20px", height: "20px"}}
                  />
            </div>
          </div>
          <hr className="hr-4 my-4" />

          <div className="flex flex-col items-center lg:flex-row">
            <div className="w-full lg:w-6/12">
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src="images/Emmett-Why-Dont-My-Relationships-Work.webp"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466389"
                />
                <button className="play-button" data-video-id="998466389"  value="998466389">
                  <img
                    src="images/play.png"
                    alt="Video Thumbnail"
                    className="h-full w-full object-contain cursor-pointer"
                    data-video-id="998466373"
                    style={{ width: "40px", height: "40px"}}
                    />
                </button>
              </div>
            </div>
            <div className="mt-4 lg:mt-0 lg:w-5/12 lg:ml-auto">
              <h4 className="text-xl font-bold" style={{fontSize: "32px"}}>
                Why Don't My Relationships Work?
              </h4>
              <p className="text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>BEFORE:</strong> I mean, I was doing really well in many
                areas of my life, except in relationships. And I would pick what
                would be probably the worst person in the world to do a
                relationship with. And then after being with them for a period of
                time, I would get a lot of evidence that this is the wrong person
                for me to be with, but I just couldn't end it. I thought for sure
                I was going to be a bachelor. One of those guys the rest of my
                life.
              </p>

              <p className="text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>AFTER:</strong> And ever since then and it was like one
                session, one like, and it was like 30 minutes and it was like that
                big of a change. Because it was right at the core of what I really
                wanted to have in life, a loving, beautiful relationship. And that
                got fixed was one, one moment in time and it was gone. And it was
                like, Man, I got my attention.
              </p>
            </div>
          </div>

          <hr className="hr-2 my-4" />
          <hr className="hr-3 my-4" />
          <div className="relative flex justify-center">
            <div className="border-t border-blue-100 w-full absolute top-1/2 transform -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
                <img
                  src="images/arrow-down.png"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466373"
                  style={{ width: "20px", height: "20px"}}
                  />
            </div>
          </div>
          <hr className="hr-4 my-4" />

          <div className="flex flex-col items-center lg:flex-row">
            <div className="w-full lg:w-6/12">
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src="images/Nancy-What_Is-The-Real-Cause-Of-Depression.webp"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466356"
                />
                <button className="play-button" data-video-id="998466356" value="998466356">
                  <img
                    src="images/play.png"
                    alt="Video Thumbnail"
                    className="h-full w-full object-contain cursor-pointer"
                    data-video-id="998466373"
                    style={{ width: "40px", height: "40px"}}
                    />
                </button>
              </div>
            </div>
            <div className="order-1 w-full lg:order-2 lg:w-6/12 lg:ml-auto">
              <h4 className="text-xl font-bold" style={{fontSize: "32px"}}>
                What Is The Real Cause of Depression?
              </h4>
              <p className="text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>BEFORE:</strong> I had an issue with anxiety and
                depression since I was about ten years old, and it was there until
                I was about forty-five. So, it was a very long decades of anxiety
                and depression. And you just never knew when, like the anxiety was
                going to turn on and you were going to be have your car pulled
                over having a panic attack.
              </p>

              <p className="text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>AFTER:</strong> And now the anxiety and depression that
                were so gut wrenchingly difficult at times in my life is just
                completely gone.
              </p>
            </div>
          </div>

          <hr className="hr-2 my-4" />
          <hr className="hr-3 my-4" />
          <div className="relative flex justify-center">
            <div className="border-t border-blue-100 w-full absolute top-1/2 transform -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
                <img
                  src="images/arrow-down.png"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466373"
                  style={{ width: "20px", height: "20px"}}
                  />
            </div>
          </div>
          <hr className="hr-4 my-4" />

          <div className="flex flex-col items-center lg:flex-row">
            <div className="w-full lg:w-6/12">
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src="images/Brian-How-Do-You-Reach-Your-Full-Potential.webp"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466453"
                />
                <button className="play-button" data-video-id="998466453" value="998466453">
                  <img
                    src="images/play.png"
                    alt="Video Thumbnail"
                    className="h-full w-full object-contain cursor-pointer"
                    data-video-id="998466373"
                    style={{ width: "40px", height: "40px"}}
                    />
                </button>
              </div>
            </div>
            <div className="mt-4 lg:mt-0 lg:w-5/12 lg:ml-auto">
              <h4 className="text-xl font-bold" style={{fontSize: "32px"}}>
                How Do You Reach Your Full Potential?
              </h4>
              <p className="text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>BEFORE:</strong> After an injury I sustained when I was
                about 12 years old. It sort of put a damper on the way that I
                approach life. There was sort of this longing to return to what I
                had had before in terms of my ability to communicate more freely.
                And I had lost that. And it was this thing that I carried with me
                for literally decades. I didn't realize how much of my life force,
                my negative emotions, had been trapped.
              </p>

              <p className="text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>AFTER:</strong> It was a burst of joy, really tears of
                happiness that I regained. This portion of my life—I was a changed
                person.
              </p>
            </div>
          </div>

          <hr className="hr-2 my-4" />
          <hr className="hr-3 my-4" />
          <div className="relative flex justify-center">
            <div className="border-t border-blue-100 w-full absolute top-1/2 transform -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
                <img
                  src="images/arrow-down.png"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466373"
                  style={{ width: "20px", height: "20px"}}
                  />
            </div>
          </div>
          <hr className="hr-4 my-4" />
          
          <div className="flex flex-col items-center lg:flex-row">
            <div className="order-2 mt-4 lg:order-1 lg:mt-0 lg:w-5/12">
              <h4 className="text-xl font-bold" style={{fontSize: "32px"}}>
                What is Happiness?
              </h4>
              <p className="text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>BEFORE:</strong> I am here in Costa Rica. People dream of
                it. And I was like, wow, this literally I had this aha moment
                where I was like, this is my happy place and I'm not happy. I
                can't go on like this, you know, where it's like, I'm just looking
                for an outside source to create the happiness.
              </p>

              <p className="text-gray-600" style={{fontSize: "20px", color: "black"}}>
                <strong>AFTER:</strong> This is the first time I've been my entire
                life and happy for no reason, other people might be like, Oh,
                shouldn't you have like the perfect marriage and all the kids and
                things? And like, I was just feeling this internal glow, this is
                magic. Like, this is what I've wanted my whole life. I was in my
                car and I was like, Oh my God, it's the first time I've been happy
                for no reason. In, like my entire life. I cannot believe this was
                possible.
              </p>

              <div className="mt-4">
                <a
                  className="inline-block rounded-lg px-4 py-2.5 hover:bg-black"
                  style={{color: "#fff", background: "#c55327", borderColor: "#c55327"}}
                  href="https://cal.com/mikem33/consultation"
                  >Schedule Appointment</a>
              </div>
            </div>
            <div className="order-1 w-full lg:order-2 lg:w-6/12 lg:ml-auto">
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src="images/Annie-What-Is-Happiness.webp"
                  alt="Video Thumbnail"
                  className="h-full w-full object-contain cursor-pointer"
                  data-video-id="998466412"
                />
                <button className="play-button" data-video-id="998466412" value="998466412">
                  <img
                    src="images/play.png"
                    alt="Video Thumbnail"
                    className="h-full w-full object-contain cursor-pointer"
                    data-video-id="998466373"
                    style={{ width: "40px", height: "40px"}}
                    />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Videos --> */}
      {/* <!-- Start Clients --> */}
      <section className="pb-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-8/12">
              <div className="mb-5 text-center">
                <p
                  className="mb-2 text-sm uppercase text-gray-600"
                  style={{fontSize: "20px", color: "black", letterSpacing: "2px"}}
                >
                  Testimonials
                </p>
                <h3 className="mb-3 font-bold" style={{fontSize: "32px"}}>
                  What Our Clients Say
                </h3>                
                <div className="relative flex justify-center">
                  <div className="border-t border-blue-100 w-full absolute top-1/2 transform -translate-y-1/2 z-0"></div>
                  <div className="relative z-10 flex justify-center">
                    <img
                      src="images/arrow-down.png"
                      alt="Video Thumbnail"
                      className="h-full w-full object-contain cursor-pointer"
                      data-video-id="998466373"
                      style={{ width: "20px", height: "20px"}}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-cr-lt-green.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                  answering questions I had had all my life... <br />
                  This was literally answering questions I had had all my life and
                  was totally blown away. If you want answers to life and how to
                  live at your full potential, then I suggest this.
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-cd-blue.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                Very helpful in dealing with life <br />
                This can be done alone, with a partner or in a group. Very helpful in dealing with life and overcoming the
                obstacles of the past and getting to know oneself.
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-dark-turquoise-ef.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                "it helped me completely..."" <br />
                This changed my life. I got the therapy done and it helped me completely heal from my brothers death and
                other tragic events that I've endured. I've honestly never felt more free. A huge weight has been lifted
                off my shoulders.
                </p>
              </div>
            </div>
            {/* <!-- Repeat similar structure for other testimonials --> */}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-ef-lt-blue.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                This changed everything for me <br />
                I am a successful businessman and this described where all of my unwanted attitudes, emotions and negative
                ideas were coming from. I finally know why problems in life occur and how to eliminate them.
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-drb-gray.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                If you're ready for more than the next inspirational quote... <br />
                This was a deep dive into truth, truth of self, so if you need more than "inspo" a LOT more, I recommend
                it.
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-jm-dk-brown.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                Makes sense <br />
                This gave me some hope that I was not going crazy and that there was something that could help me. It
                makes sense to me why people are the way they are.
                </p>
              </div>
            </div>
            {/* <!-- Repeat similar structure for other testimonials --> */}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-cb-dk-maroon.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                This is life changing <br />
                This explained so much to me about why people behave as they do. It allows me to understand people and to
                know that when someone is being irrational that it's not really them but their reactive mind. This helps
                me in dealing with situations in my life.
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-ps-red.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                You can lead a better, happier life... <br />
                This explains the source of unwanted emotions, fears, and upsets. And shows how to get rid of them so that
                you can lead a better, happier life. I highly recommend it.
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-jm-lt-magenta.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                Well worth the time <br />
                This is not run-of-the-mill. Not by a long shot. Rather than dealing out a passel of platitudes, it
                provides concrete methods for improvement in wellbeing and relationships. The techniques helped relieve
                the person of the past burdens. With the world becoming more contentious and difficult to decipher, this
                provides some badly needed answers.
                </p>
              </div>
            </div>
            {/* <!-- Repeat similar structure for other testimonials --> */}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-hm-dk-blue.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                It explains and helps handle things in life! <br />
                The is so well laid out and gives you not only a technique but what is happening when you do the
                procedure. You can be at cause over things that you have felt helpless about!
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-jd-yellow.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                Absolutely life changing! <br />
                My personal problem was that I had trouble speaking to people. I was afraid. There was no reason for it,
                it was completely irrational. But it was a huge problem for me in business deals, speaking with
                professors, giving presentations, and just generally being social. This not only was able to tell me why I
                had this problem and where it came from, but also HOW TO FIX IT. That's what really impressed me the most
                - it actually will fix the things that give you trouble in life, not just talk about them or give you some
                vague idea of what needs to be done.
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-lc-brown.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                Answers the questions you wanted to ask <br />
                WOW! I have tried to actually use so many different philosophies and practices in my life to make things
                better. Some helped a little, some helped more. But, this has the information about why individuals,
                systems, civilizations, marriages, religions and groups don't make it, long term. This is astonishing.
                </p>
              </div>
            </div>
            {/* <!-- Repeat similar structure for other testimonials --> */}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-ns-black.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                This made life so much better! <br />
                This helped me so much to understand how the mind works, why we sometimes behave irrationally for no
                apparent reason and something practical people can actually do about it.
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-al-dk-gray.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                Can make decisions easily now <br />
                Before reading this, I had a lot of trouble making decisions. I would think about things and ponder them
                and often would end up getting nothing done or putting life choices off over and over again. It explained
                to me why it was that I took so long to make decisions and why sometimes I made the wrong ones. This has
                helped me so much in getting things done to lead a generally happier life. Thank you!
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-ac-magenta.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                deeper and more compassionate understanding... <br />
                It would be impossible to not come away with a deeper and more compassionate understanding of their fellow
                man. Highly recommended. Worth it many times over.
                </p>
              </div>
            </div>
            {/* <!-- Repeat similar structure for other testimonials --> */}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-js-cyan.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                An adventure into Terra Incognita (unknown land) <br />
                There are few that can take one on a journey like this one! The freedom that I have experienced in my life
                and the return of memory that this has handed me is impossible to describe. That said, this isn't about me
                it's about you and helping you get rid of influences that make life less fun. This has helped me in life,
                marriage, work, raising kids, and with family. I recommend it highly to anyone that wants to truly
                understand their mind and how it really works.
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-kd-bright.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                ...actually handled my depression <br />
                I had severe depression after having my baby. Nothing seemed to help and I didn't want to be on pills for
                the rest of my life. Then I found this that's based on modern science. It made so much sense, and finally
                I felt like my questions were answered and I knew how and why I was feeling that way. I followed the
                instructions and I started getting better right away. I highly recommend this for anyone who doesn't want
                to take pills to handle their depression.
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-cm-dk-green.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                Handled my anxiety, wow!! <br />
                This took me on a very unexpected trip. This one actually gives a practical explanation and remedy for the
                anxiety I suffered with for years. I gotta say, this was a game changer for me!
                </p>
              </div>
            </div>
            {/* <!-- Repeat similar structure for other testimonials --> */}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-dd-gray.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                A fascinating, about the mind (and much more) <br />
                This is built around the idea that something positive can be done to not only address things I didn't
                understand or like about myself but also how to move forward no matter how crazy things get out there. I
                also really appreciated the understanding it gave me about other people. One thing I learned over the last
                few years is how important it is to take charge of my own life and my own health, physical and mental.
                This gave me a deep understanding and tools I can use pretty much every day.
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-je-orange.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                It is your pathway to emotional/mental freedom <br />
                This has opened so many doors for me and has led to me making PROFOUND advances in professional and
                personal lives. My relationship has never been stronger.
                </p>
              </div>
            </div>
            <div className="flex" style={{marginBottom: "50px"}}>
              <div
                className="relative flex h-full flex-col justify-between rounded-lg border border-primary p-5 text-left transition-transform hover:-translate-y-2.5"
                style={{border: "1px solid #c55327"}}
              >
                <img
                  src="images/circle-sa-dk-orange.webp"
                  alt="Testimonial Picture"
                  className="absolute left-4 top-2.5 h-10 w-10 rounded-full border border-white"
                />
                <p
                  className="mt-10 text-gray-600"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "black"
                  }}
                >
                  It just makes sense <br />
                  This was different. It just totally makes sense. It's very simple and I like that the science involved is
                  100% invariable to every person..
                </p>
              </div>
            </div>
            {/* <!-- Repeat similar structure for other testimonials --> */}
          </div>
        </div>
      </section>

      {/* <!-- End Clients --> */}
      {/* <!-- Start Faq section --> */}
      <section className="bg-secondary">
        <div className="container mx-auto">
          
          <div className="relative flex justify-center">
            <div className="border-t border-blue-100 w-full absolute top-1/2 transform -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex justify-center">
              <img
                src="images/arrow-down.png"
                alt="Video Thumbnail"
                className="h-full w-full object-contain cursor-pointer"
                data-video-id="998466373"
                style={{ width: "20px", height: "20px"}}
                />
            </div>
          </div>
          <hr className="hr-4 my-4" />

          <div className="mb-5 grid gap-6 md:grid-cols-2">
            <div className="mb-5 grid gap-6 md:grid-rows-2">
              <div className="flex">
                <div className="mr-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{backgroundColor: "#e2a993"}}
                  >
                    <i className="mdi mdi-check"></i>
                  </div>
                </div>
                <div>
                  <h5 className="mt-1 font-18" style={{fontWeight: "700"}}>Why do we hurt the ones we love?</h5>
                </div>
              </div>
              <div className="flex">
                <div className="mr-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{backgroundColor: "#e2a993"}}
                  >
                    <i className="mdi mdi-check"></i>
                  </div>
                </div>
                <div>
                  <h5 className="mt-1 font-18" style={{fontWeight: "700"}}>What is the real cause of depression?</h5>
                </div>
              </div>
              {/* <!-- Repeat similar structure for other FAQ items --> */}
            </div>
            <div className="mb-5 grid gap-6 md:grid-rows-2">
              <div className="flex">
                <div className="mr-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{backgroundColor: "#e2a993"}}
                  >
                    <i className="mdi mdi-check"></i>
                  </div>
                </div>
                <div>
                  <h5 className="mt-1 font-18" style={{fontWeight: "700"}}>Why do we give up on our dreams?</h5>
                </div>
              </div>
              <div className="flex">
                <div className="mr-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{backgroundColor: "#e2a993"}}
                  >
                    <i className="mdi mdi-check"></i>
                  </div>
                </div>
                <div>
                  <h5 className="mt-1 font-18" style={{fontWeight: "700"}}>Is there a cure for stress?</h5>
                </div>
              </div>
              {/* <!-- Repeat similar structure for other FAQ items --> */}
            </div>
          </div>
          <div className="mb-5 grid gap-6 md:grid-cols-2">
            <div className="mb-5 grid gap-6 md:grid-rows-2">
              <div className="flex">
                <div className="mr-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{backgroundColor: "#e2a993"}}
                  >
                    <i className="mdi mdi-check"></i>
                  </div>
                </div>
                <div>
                  <h5 className="mt-1 font-18" style={{fontWeight: "700"}}>Can you conquer your fears?</h5>
                </div>
              </div>
              <div className="flex">
                <div className="mr-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{backgroundColor: "#e2a993"}}
                  >
                    <i className="mdi mdi-check"></i>
                  </div>
                </div>
                <div>
                  <h5 className="mt-1 font-18" style={{fontWeight: "700"}}> How do you reach your full potential?</h5>
                </div>
              </div>
              {/* <!-- Repeat similar structure for other FAQ items --> */}
            </div>
            <div className="mb-5 grid gap-6 md:grid-rows-2">
              <div className="flex">
                <div className="mr-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{backgroundColor: "#e2a993"}}
                  >
                    <i className="mdi mdi-check"></i>
                  </div>
                </div>
                <div>
                  <h5 className="mt-1 font-18" style={{fontWeight: "700"}}>How can you improve your mental health?</h5>
                </div>
              </div>
              <div className="flex">
                <div className="mr-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{backgroundColor: "#e2a993"}}
                  >
                    <i className="mdi mdi-check"></i>
                  </div>
                </div>
                <div>
                  <h5 className="mt-1 font-18" style={{fontWeight: "700"}}>What is the true source of anxiety?</h5>
                </div>
              </div>
              {/* <!-- Repeat similar structure for other FAQ items --> */}
            </div>
          </div>
          <div className="mb-5 grid gap-6 md:grid-cols-2">
            <div className="mb-5 grid gap-6 md:grid-rows-2">
              <div className="flex">
                <div className="mr-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{backgroundColor: "#e2a993"}}
                  >
                    <i className="mdi mdi-check"></i>
                  </div>
                </div>
                <div>
                  <h5 className="mt-1 font-18" style={{fontWeight: "700"}}>What is happiness?</h5>
                </div>
              </div>
              {/* <!-- Repeat similar structure for other FAQ items --> */}
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row position-relative text-center" style={{display: "flex", justifyContent: "center"}} >
            <div className="w-full md:w-1/3 lg:w-1/3">
              <h4 className="mb-1 pb-1">
                <strong>22,168,430</strong> People <br />Can't Be Wrong!
              </h4>
              <br />
              <h4>Contact us now for more information and a private one-on-one consultation that will show you how to find
                the happiness you've been looking for.</h4>
              <br />
              <h1 className="text-black text-3xl md:text-4xl font-bold mb-2 lg:mb-3">
                Call Now For An Appointment
              </h1>
              {/* <h1 className="hero-4-title text-black mb-lg-3 mb-2">
                Call Now For An Appointment
              </h1> */}
              <h1>
                <a href="tel:800-727-7844">800-727-7844 <br/> or </a>
              </h1>
              <br/>
              <h1 className="text-black text-3xl md:text-4xl font-bold mb-2 lg:mb-3">
                Schedule Appointment Online
              </h1>
              {/* <h1 className="hero-4-title text-black mb-lg-3 mb-2">
                Schedule Appointment Online
              </h1> */}
              <div className="flex justify-center">
                <a href="https://cal.com/mikem33/consultation" className="btn btn-primary">Schedule Now<i
                    className="mdi mdi-arrow-right ms-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="hero-4" style={{paddingTop: "11vh"}}
        id="home"
      >
        <div className="mx-auto px-4" style={{maxWidth: "1140px"}}>
          <div className="relative flex items-center justify-center">
            <div className="w-full lg:w-8/12">
              <div className="relative rounded-r-[30px] bg-white/10 text-center">
                <span className="con-border-top"></span>
                <span className="con-border-bottom"></span>
                <p className="text-center mb-4" style={{fontSize: "20px", color: "black"}}>
                  We are a Personal Consultant company providing private
                  one-on-one consultations for business and personal problems and
                  their solutions.
                </p>

                <ul className="list-none text-center">
                  <li>
                    <a
                      href="privacy policy.html"
                      className="text-gray-600 transition-colors hover:text-gray-400" style={{fontSize: "20px", color: "black"}}
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
                <br /><br /><br /><br /><br />

                <p className="mb-0" style={{fontSize: "15px", lineHeight: "1.6"}}>
                  © 2008-2024 L. Ron Hubbard Library. All Rights Reserved. Any
                  unauthorized copying, translation, duplication, importation or
                  distribution, in whole or in part, by any means, including
                  electronic copying, storage or transmission, is a violation of
                  applicable laws. Dianetics and Scientology are trademarks and
                  service marks owned by Religious Technology Center and are used
                  with its permission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
