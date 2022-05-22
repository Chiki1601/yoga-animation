// add all plugins manually
gsap.from("#lotus path", {
  drawSVG: 0,
  duration: 3,
  stagger: 1,
  repeat: -1,
  yoyo: true
});

gsap.to("#mat rect", 6, { fill: "#abcedd" });

gsap.set("#c", { transformOrigin: "Center center" });
gsap.set("#breatheText", { x: 80, y: 60 });

// $('#btn').click(function() {

function breatheIn() {
  let tl = new gsap.timeline();
  gsap.to("#c", 2.5, { scale: 3 });
  return tl;
}
function breatheOut() {
  let tl = new gsap.timeline();
  gsap.to("#c", 2.5, { scale: 1 });
  return tl;
}
function inhale() {
  $("breatheText").html("inhale");
}
function exhale() {
  $("breatheText").html("exhale");
}

var master = new gsap.timeline();
master.to("#c", 5, { scale: 3, repeat: -1, yoyo: true });
// let master = gsap.timeline({ repeat: -1, yoyo: true });
// master.add(inhale()).add(breatheIn()).add(exhale()).add(breatheOut());

master.pause();

var playing = false;
$("#btn").click(function () {
  if (playing == false) {
    master.play();
  } else {
    master.pause();
  }
  playing = !playing;
});