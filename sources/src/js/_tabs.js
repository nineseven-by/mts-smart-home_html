import gsap from "gsap";

export class Tabs {
  constructor(elem) {
    this.elem = elem;
    this.header = elem.querySelector('.tabs-header');
    this.wrapper = null;
    if (elem.querySelector(".tabs-wrapper")) {
      this.wrapper = elem.querySelector('.tabs-wrapper');
    }
    if (elem.querySelector(".tabs__wrapper")) {
      this.wrapper = elem.querySelector('.tabs__wrapper');
    }
    //if (!!elem.dataset.tabsControl) {
    //  this.wrapper = document.querySelector(`#${elem.dataset.tabsControl}`);
    //}

    this.tabs = [];

    const allButtons = Array.from(this.header.querySelectorAll('.tabs__button'));
    if (!!this.wrapper) {
      const allContainers = Array.from(this.wrapper.querySelectorAll('.tabs__container'));
      this.tabs = allButtons.map((button, index) => new Tab(this, button, allContainers[index]));
    } else {
      this.tabs = allButtons.map((button) => new Tab(this, button));
    }

    this.isLock = false;

    this.events();
  }

  events() {
    this.elem.addEventListener('click', (e) => {
      if (e.target.closest('.tabs__button') && !this.isLock) {
        const tl = gsap.timeline();
        function closeTl(elem) {
          const tl = gsap.timeline();
          tl.to(elem, {
            height: 0,
            opacity: 0,
            duration: 0.8,
          });
          return tl;
        }
        function openTl(elem) {
          console.log(elem)
          const tl = gsap.timeline();
          tl.to(elem, {
            height: 'auto',
            opacity: 1,
            duration: 0.8,
          });
          return tl;
        }
        this.tabs.forEach((tab) => {
          if (e.target !== tab.btn && !!tab.isActive) {
            tab.close();
            if (!!this.wrapper) tl.add(closeTl(tab.container), '<');
          }
          if (e.target === tab.btn && !tab.isActive) {
            tab.open();
            if (!!this.wrapper) {
              tl.add(openTl(tab.container), "<");
              this.isLock = true;
              setTimeout(() => {
                this.isLock = false;
              }, 700);
            }
          }
        });
      }
    });
  }
}
export class Tab {
  constructor(tabs, button, container) {
    this.tabs = tabs;
    this.btn = button;
    this.container = null;
    if (!!container) {
      this.container = container;
    }
    this.isActive = button.classList.contains('active');

    if (!!this.isActive && !!this.container) {
      gsap.set(this.container, {
        height: "auto",
        opacity: 1,
        duration: 0.8,
      });
    }
  }
  open() {
    if (!this.btn.classList.contains('active')) {
      this.btn.classList.add('active');
      if (this.container) this.container.classList.add('active')
      this.isActive = true;
    }
  }
  close() {
    if (this.btn.classList.contains('active')) {
      this.btn.classList.remove('active');
      this.isActive = false;
    }
  }
}
