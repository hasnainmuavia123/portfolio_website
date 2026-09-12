/**
 * Neural Network Particle Canvas
 * Hasnain Muavia AI Engineer Portfolio
 */

class NeuralBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 150 };
    this.numberOfParticles = 65;
    this.animationFrameId = null;

    this.init();
    this.bindEvents();
    this.animate();
  }

  init() {
    this.resize();
    this.particles = [];
    const count = Math.min(Math.floor((this.width * this.height) / 18000), 90);
    this.numberOfParticles = Math.max(count, 35);

    for (let i = 0; i < this.numberOfParticles; i++) {
      this.particles.push(new Particle(this.width, this.height));
    }
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.init();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  connect() {
    const maxDistance = 140;
    for (let a = 0; a < this.particles.length; a++) {
      for (let b = a + 1; b < this.particles.length; b++) {
        const dx = this.particles[a].x - this.particles[b].x;
        const dy = this.particles[a].y - this.particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.25;
          this.ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
          this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
          this.ctx.stroke();
        }
      }
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update(this.width, this.height, this.mouse);
      this.particles[i].draw(this.ctx);
    }
    this.connect();

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}

class Particle {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 2 + 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 15 + 2;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    // Ambient purple / magenta or subtle lavender
    const rand = Math.random();
    if (rand > 0.6) {
      this.color = 'rgba(217, 70, 239, '; // Magenta
    } else if (rand > 0.25) {
      this.color = 'rgba(135, 80, 247, '; // Electric violet
    } else {
      this.color = 'rgba(192, 132, 252, '; // Soft purple
    }
    this.alpha = Math.random() * 0.6 + 0.2;
  }

  draw(ctx) {
    ctx.fillStyle = this.color + this.alpha + ')';
    ctx.shadowBlur = this.size > 2 ? 8 : 0;
    ctx.shadowColor = 'rgba(135, 80, 247, 0.5)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0; // reset
  }

  update(width, height, mouse) {
    // Normal floating movement
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > width) this.vx = -this.vx;
    if (this.y < 0 || this.y > height) this.vy = -this.vy;

    // Mouse interactivity (gentle repulse)
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = mouse.radius;

      if (distance < maxDistance) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density * 0.6;
        const directionY = forceDirectionY * force * this.density * 0.6;

        this.x -= directionX;
        this.y -= directionY;
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new NeuralBackground('neural-canvas');
});
