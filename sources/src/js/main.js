import Swiper from "swiper";
import {
  Navigation,
  Manipulation,
  Pagination,
  Controller
} from "swiper/modules";
import { Tabs } from "./_tabs.js";
import IMask from 'imask';
import gsap from "gsap";

import ScrollTrigger from "../libs/gsap/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger); 

let vh;
let widthScrollBar;
let mainPopups;
let isBodyFixed = false;
let overlayGood;
let header;
const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};
const dateMs = {
  s: 1000,
  min: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
};
// Склонение слов в зависимости от числа
function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  //console.log(number)
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

const bodyFixPosition = () => {
  setTimeout(() => {
    if (!document.body.hasAttribute("data-body-scroll-fix")) {
      isBodyFixed = true;
      let scrollPos = window.scrollY || document.documentElement.scrollTop;

      document.body.setAttribute("data-body-scroll-fix", scrollPos);
      document.body.classList.add("fixed");
      document.documentElement.classList.add("fixed");
      document.body.style.top = `-${scrollPos}px`;
      // Коррекция скролла
      if (widthScrollBar > 0)
        document.body.style.paddingRight = `${widthScrollBar}px`;
        document.querySelector("header").style.paddingRight = `${widthScrollBar}px`;
      const miaSupport = document.querySelector(".webim-button-corner");
      if (miaSupport) {
        miaSupport.classList.add("soft-hidden");
      }
    }
  }, 18);
};
const bodyUnfixPosition = () => {
  if (document.body.hasAttribute("data-body-scroll-fix")) {
    let scrollPos = document.body.getAttribute("data-body-scroll-fix");
    document.body.removeAttribute("data-body-scroll-fix");
    document.body.classList.remove("fixed");
    document.documentElement.classList.remove("fixed");
    document.body.style.top = "";
    document.body.style.paddingRight = "";
    document.querySelector("header").style.paddingRight = "";
    window.scroll(0, scrollPos);
    isBodyFixed = false;
    const miaSupport = document.querySelector(".webim-button-corner");
    if (miaSupport) {
      miaSupport.classList.remove("soft-hidden");
    }
  }
};

const bodyFix = (value) => {
  if (!!value) {
    bodyFixPosition();
  } else {
    bodyUnfixPosition();
  }
};



document.addEventListener("DOMContentLoaded", function(event) {
  // Your code here
  checkWidthScrollBar();
  checkVH();
  const checkBodyFix = () => {
    if ((!!mainPopups && mainPopups.isOpen)) {
      bodyFix(true);
    } else {
      bodyFix(false);
    }
  };
  if (document.querySelector(".overlay-good")) {
    overlayGood = document.querySelector(".overlay-good");
  }
  if (document.querySelector("header")) {
    header = document.querySelector("header");
  }
  const sliderContainers = Array.from(document.querySelectorAll("[data-slider-container]"));
  sliderContainers.forEach((container) => {
    const swiperElement = container.querySelector(".swiper");
    const buttonPrev = container.querySelector(".swiper-button-prev");
    const buttonNext = container.querySelector(".swiper-button-next");
    const swiper = new Swiper(swiperElement, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        prevEl: buttonPrev,
        nextEl: buttonNext,
      },

      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3,

        }
      }
    });
  });
  const smartPopularSliders = Array.from(document.querySelectorAll(".smartpopular-more__slider "));
  smartPopularSliders.forEach((container) => {
    const swiperElement = container.querySelector(".swiper");
    const buttonPrev = container.querySelector(".swiper-button-prev");
    const buttonNext = container.querySelector(".swiper-button-next");
    const swiper = new Swiper(swiperElement, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        prevEl: buttonPrev,
        nextEl: buttonNext,
      },
    });
  });

  const burger = document.querySelector(".header__burger");
  if (burger) {
    burger.addEventListener("click", () => {
      document.querySelector("header").classList.toggle("opened");
    })
  }


  if (document.querySelector(".smart")) {
    const smartSection = document.querySelector(".smart");
    const smartHome = new SmartHome(document.querySelector(".smart"), bodyFix);
  }

  const tabs = Array.from(document.querySelectorAll(".tabs"));
  tabs.forEach((tabsWrapper) => {
    new Tabs(tabsWrapper);
  });
  if (document.querySelector(".popups")) {
    const popupsWrapper = document.querySelector(".popups");
    mainPopups = new Popups(popupsWrapper, bodyFixPosition, bodyUnfixPosition);
  }

  if (document.querySelector("#popup-item")) {
    const popup = document.querySelector("#popup-item");
    const popupNameElem = popup.querySelector("[data-good-name]");
    const popupImgElem = popup.querySelector("[data-good-preview]");
    const popupIdElem = popup.querySelector("[data-good-name-input]");
    const items = Array.from(document.querySelectorAll("[data-good-id]"));
    //console.log(items)
    items.forEach((item) => {
      const itemNameElem = item.querySelector(".smartpopular-item__title");
      const itemImgElem = item.querySelector(".smartpopular-item__image img");
      const btn = item.querySelector("[data-popup-order]");
      btn.addEventListener("click", (e) => {
        popupNameElem.innerText = itemNameElem.innerText;
        popupImgElem.alt = itemImgElem.alt;
        popupImgElem.src = itemImgElem.src;
        popupIdElem.value = itemNameElem.innerText;
        console.log(popupIdElem.value)
        openPopup("popup-item");
      });
    })
  }


  const funcOnResize = debounce((isWidth) => {
    checkVH();
    checkWidthScrollBar();
  }, 250);
  let innerW = window.innerWidth;
  window.addEventListener("resize", () => {
    if (window.innerWidth !== innerW) {
      if (isBodyFixed) checkBodyFix();
    }
    funcOnResize();
  });

  if (document.querySelector('a[href^="#"]:not([href="#"])')) {
    const links = Array.from(document.querySelectorAll('a[href^="#"]:not([href="#"])'));
    links.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        let offsetLink = 100;
        //if (link.hasAttribute('data-offset-link')) {
        //  offsetLink = link.getAttribute('data-offset-link');
        //}
        scrollToElement(target, offsetLink, 500, function() {
          header.classList.remove("opened");
        });

      });
    })
  }


  // Input Masks
  if (document.querySelector("[data-mask]")) {
    const maskInputs = Array.from(document.querySelectorAll("[data-mask]"));
    const phoneOptions = {
      mask: "+{375} (00) 000-00-00",
      lazy: false,
    };
    const phoneNoPrefixOptions = {
      mask: "(00) 000-00-00",
      lazy: false,
    };
    maskInputs.forEach((input) => {
      if (input.dataset.mask === "phone") {
        const maskPhone = IMask(input, phoneOptions);
        input.addEventListener("click", (e) => {
          setTimeout(() => {
            maskPhone.alignCursor();
          }, 0);
        });
      }
      input.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") e.preventDefault();
        if (e.key === "ArrowLeft") e.preventDefault();
        if (e.key === "ArrowUp") e.preventDefault();
        if (e.key === "ArrowDown") e.preventDefault();
      });
    });
  }
  // Animations
  let keyReady = true;
  const keyCheck = ['h1', ".key__description", ".key__footer"];
  keyCheck.forEach((sel) => {
    if (!document.querySelector(sel)) keyReady = false;
  })
  if (keyReady) {
    const tl = gsap.timeline();
    tl.fromTo("h1", {
      y: 40,
      opacity: 0,
      duration: .6
    }, {
      y: 0,
      opacity: 1,
      duration: .6
    });
    tl.fromTo(".key__description", {
      y: 40,
      opacity: 0,
      duration: .4
    }, {
      y: 0,
      opacity: 1,
      duration: .4
    }, ">");
    tl.fromTo(".key__footer", {
      y: -20,
      opacity: 0,
      duration: .3
    }, {
      y: 0,
      opacity: 1,
      duration: .3
    }, ">");
  }
  if (!keyReady) {
    keyCheck.forEach((sel) => {
      if (document.querySelector(sel)) {
        document.querySelector(sel).classList.add("not-anim");
      }
    });
  }
  if (document.querySelector(".smarthome-cards__item")) {
    const cards = Array.from(document.querySelectorAll(".smarthome-cards__item"));
    cards.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      });
    });
  }
});



class SmartHome {
  constructor(section, bodyFixFunction) {
    this.bodyFix = bodyFixFunction;
    this.viewMode = "image";
    this.locationNames = [];
    this.location = this.locationNames[0];
    this.btnsViewMode = Array.from(section.querySelectorAll(".smart-view__display .tabs-icon__btn"));
    this.locationsList = section.querySelector(".smart-locs__list");
    this.view = section.querySelector(".smart-view");
    this.viewBtnClose = section.querySelector(".smart-view__close");
    this.viewer = section.querySelector(".smart-viewer");
    this.scrollImageWrapper = section.querySelector("#smart-viewer-image");
    this.elemPreview = section.querySelector(".smart-viewer__preview");
    this.previewControl = section.querySelector("#smart-viewer-preview");
    this.imageWrapper = section.querySelector(".smart-viewer__wrapper");
    this.imageRangeOverflow = section.querySelector(".smart-viewer__range");
    this.imageRangeHandle = section.querySelector(".smart-viewer__handle");
    this.image = this.imageWrapper.querySelector("img");

    this.smartCategories = section.querySelector(".smart-categories");

    this.updateRangePreview();
    this.isOpened = false;
    this.isOpenedPopup = false;

    this.goodPopup = new SmartPopupGood(section.querySelector(".smart-popup"));

    this.locations = [];

    this.addEvents();
  }

  updateRangePreview() {
    const widthPreview = this.elemPreview.offsetWidth;
    const widthImageWrapper = this.imageWrapper.offsetWidth;
    const widthImage = this.image.offsetWidth;
    this.dynamicVisiblePreviewWidth = widthPreview * 0.01 * Math.round(widthImageWrapper / (widthImage * 0.01));
    this.imageRangeHandle.style.width = `${this.dynamicVisiblePreviewWidth}px`;
    const t = this.dynamicVisiblePreviewWidth / 2;
    this.imageRangeOverflow.style.left = `${t}px`;
    this.imageRangeOverflow.style.right = `${t}px`;
    this.imageRangeOverflow.style.width = `${this.elemPreview.offsetWidth - t - t}px`;
  }

  openPopup() {
    this.view.classList.add("opened");
    document.querySelector("header").classList.remove("opened");
    document.querySelector("header").classList.add("hide");
    if (window.innerWidth < 1200) {
      this.bodyFix(true);
    }
    this.isOpened = true;

    this.updateRangePreview();
  }
  closePopup() {
    this.isOpened = false;
    if (window.innerWidth < 1200) {
      this.bodyFix(false);
    }
    this.view.classList.remove("opened");
    document.querySelector("header").classList.remove("hide");
  }

  toggleViewMode(e) {
    const target = e.target.closest("button");
    if (!target.hasAttribute("data-viewmode")) return;
    this.viewer.classList.remove(`smart-viewer--${this.viewMode}`);
    this.viewer.classList.remove(`smart-viewer--good`);
    if (overlayGood) {
      overlayGood.classList.remove("opened");
      header.classList.remove("hide-good");
      bodyFix(false);
    }
    this.viewMode = target.dataset.viewmode;
    this.changeActiveBtnViewMode();
    this.viewer.classList.add(`smart-viewer--${this.viewMode}`);
  }
  changeActiveBtnViewMode() {
    this.btnsViewMode.forEach((btn) => {
      if (btn.dataset.viewmode !== this.viewMode) {
        btn.classList.remove("active");
      } else {
        btn.classList.add("active");
      }
    });
  }
  changeLocation(e) {
    const targetDots = document.querySelector("#target-dots");
    const targetGroups = document.querySelector(".smart-categories__list");
    this.viewer.classList.remove(`smart-viewer--good`);
    if (overlayGood) {
      overlayGood.classList.remove("opened");
      header.classList.remove("hide-good");
      bodyFix(false);
    }
    targetDots.innerHTML = "";
    targetGroups.innerHTML = "";
    document.dispatchEvent(new CustomEvent("changeLocation", {
      detail: {
        newLocation: e.detail.newLocation
      }
    }));
  }
  addEvents() {
    document.addEventListener("loadSmartData", (e) => {
      const data = typeof e.detail.data === "string" ? JSON.parse(e.detail.data) : e.detail.data;
      this.locations = new SmartLocations(data.locations, data.groups, data.goods);
      this.groups = data.groups.map((group) => {
        const goodsInGroup = data.goods.filter((good) => good.group === group.id).map((good) => new SmartGood(good));
        new SmartGroup(group, goodsInGroup, this.goodPopup)
      });
      this.goodPopup.setGoods(data.goods);

      this.locations.changeLocation(data.locations[0].id);
    });
    document.addEventListener("beforeChangeLocation", this.changeLocation.bind(this));
    this.locationsList.addEventListener("click", () => {
      this.openPopup();
    });
    this.viewBtnClose.addEventListener("click", this.closePopup.bind(this));
    this.btnsViewMode.forEach((btn) => {
      btn.addEventListener("click", this.toggleViewMode.bind(this));
    });
    this.previewControl.addEventListener("input", (e) => {
      const t = this.scrollImageWrapper;
      this.scrollImageWrapper.scrollLeft = (t.scrollWidth - window.innerWidth) * 0.01 * e.target.value;
    });
    this.scrollImageWrapper.addEventListener("scroll", (e) => {
      const maxWidth = e.target.scrollWidth - window.innerWidth;
      const scrollLeft = e.target.scrollLeft;
      const offset = Math.round(scrollLeft / (maxWidth * 0.01));
      this.previewControl.value = offset;
      this.imageRangeHandle.style.left = `${offset}%`;
    });
  }
}

class SmartPopupGood {
  constructor(wrapper) {
    this.tabs = new SmartTabs(wrapper);
    this.elTrigger = document.querySelector(".smart-viewer");
    this.goods = [];

    this.elemTitle = wrapper.querySelector(".smart-view__title");

    this.closeBtn = wrapper.querySelector(".smart-view__close");

    const sliderCombinationEl = wrapper.querySelector(".smart-popup__combination .swiper");
    const sliderDescriptionEl = wrapper.querySelector(".smart-popup__description .swiper");
    const nextBtn = wrapper.querySelector(".smart-popup .swiper-control__right");
    const prevBtn = wrapper.querySelector(".smart-popup .swiper-control__left");
    this.sliders = {
      combination: new Swiper(sliderCombinationEl, {
        modules: [Navigation, Controller, Manipulation, Pagination],
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        pagination: {
          el: ".smart-pagination__list",
          type: "bullets",
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="smart-pagination__item"><button aria-label="К примеру №' + (index + 1) + '" title="К примеру №' + (index + 1) + '" class="smart-pagination__btn ' + className + '"><span>' + (index + 1) +
              '</span></button></li>';
          },
        },
      }),
      description: new Swiper(sliderDescriptionEl, {
        modules: [Controller, Manipulation, Pagination]
      })
    };
    this.sliders.combination.controller.control = this.sliders.description;
    this.sliders.description.controller.control = this.sliders.combination;

    this.pagination = wrapper.querySelector(".smart-pagination");
    this.activeSlide = 0;
    this.pagination.addEventListener("click", (e) => {
      const target = e.target.closest(".smart-pagination__btn");
      if (target) {
        this.sliders.description.slideTo(+target.textContent - 1, 400);
        this.sliders.combination.slideTo(+target.textContent - 1, 400);
      }
    });
    this.closeBtn.addEventListener("click", (e) => {
      this.elTrigger.classList.remove("smart-viewer--good");
      if (overlayGood) {
        overlayGood.classList.remove("opened");
        header.classList.remove("hide-good");
        bodyFix(false);
      }
    });


  }
  setGoods(goods) {
    this.goods = goods;
  }
  updatePopup(group) {
    const templateSmartCard = document.querySelector("#template-smart-card");
    this.sliders.combination.removeAllSlides();
    this.sliders.description.removeAllSlides();

    this.elemTitle.innerText = group.nameRu;

    const getCard = (good, isMin) => {
      const newTemplateNode = templateSmartCard.content.cloneNode(true);
      const card = newTemplateNode.querySelector(".smart-card");
      const link = newTemplateNode.querySelector(".smart-card__link");
      const img = newTemplateNode.querySelector(".smart-card__image img");
      const title = newTemplateNode.querySelector(".smart-card__title");

      link.setAttribute("href", good.link);
      link.setAttribute("target", "_blank");
      img.setAttribute("alt", good.nameRu);
      img.setAttribute("src", good.imageSmall || good.image);
      title.innerText = good.nameRu;
      if (newTemplateNode.querySelector(".share__link")) {
        const links = Array.from(newTemplateNode.querySelectorAll(".share__link"));
        links.forEach((el) => {
          el.setAttribute("href", createShareItemLink(el.dataset.social, `${good.link}`, "Посмотри,+что+я+нашел+для+умного+дома:+" + good.nameRu + "+в+МТС", "Посмотри,+что+я+нашел+для+умного+дома:+" + good.nameRu + "+в+МТС"))
        })
      }
      if (isMin) {
        card.classList.remove("smart-card--big");
      }
      return card.outerHTML;
    }

    const goods = this.goods.filter((good) => good.group === group.id);
    goods.forEach((good) => {
      const card = getCard(good);

      let relatedItems = "";
      if (good.related && good.related.length > 0) {
        good.related.forEach((goodId) => {
          const relGood = this.goods.find((goodTarget) => goodTarget.id === goodId);
          if (relGood) {
            relatedItems += getCard(relGood);
          }
        });
      }

      let appHtml = '';
      if (good.app && good.app.length > 0) {
        good.app.forEach((app) => {
          const appNode = document.querySelector(`#template-app-${app}`);
          if (appNode) {
            const appElem = appNode.content.cloneNode(true);
            appHtml += appElem.querySelector(".smart-card-app").outerHTML;
          }
        });
      }

      let cards = `${card}${relatedItems}`;
      if (card.length > 0 && relatedItems.length > 0) {
        cards = `<div class="smart-cards">${cards}</div>`;
      }
      this.sliders.combination.appendSlide(
        `<div class="swiper-slide">${cards}${appHtml}</div>`
      );
      // Description slider
      const cardSmall = getCard(good, true);

      let relatedSmallItems = "";
      if (good.related && good.related.length > 0) {
        good.related.forEach((goodId) => {
          const relGood = this.goods.find((rel) => rel.id === goodId);
          if (relGood) {
            relatedSmallItems += getCard(relGood, true);
          }
        });
      }

      let moreHtml = "";
      if (good.list && good.list.length > 0) {
        moreHtml += '<div class="smart-popup__more"><ul>';
        good.list.forEach((item) => {
          moreHtml += `<li>${item}</li>`;
        });
        moreHtml += '</ul></div>';
      }

      this.sliders.description.appendSlide(
        `<div class="swiper-slide">${cardSmall}${relatedSmallItems}${moreHtml}</div>`
      );
    });
  }
}

class SmartLocations {
  constructor(locations, groups, goods) {
    this.activeLocation = null;
    this.image = document.querySelector(".smart-viewer__img img");
    this.imagePreview = document.querySelector(".smart-viewer__preview img");
    this.list = document.querySelector(".smart-locs__list");
    this.template = document.querySelector("#template-location");
    this.targetLocations = document.querySelector(".smart-locs__list");
    this.mobilePreviewTitle = document.querySelector(".smart-view__title");
    this.goods = goods;
    this.locations = locations.map((location) => {
      const elem = this.template.content.cloneNode(true);
      const btn = elem.querySelector("button");
      const title = elem.querySelector(".smart-location__title");
      const elemValue = elem.querySelector(".smart-location__value");
      btn.dataset.locationId = location.id;

      let countGroups = 0;
      groups.forEach((group) => {
        group.locations.forEach((loc) => {
          if (loc.id === location.id) {
            this.goods.forEach((good) => {
              if (good.group === group.id) countGroups++;
            })
          }
        });
      });

      this.setRuCountGroups(elemValue, countGroups);
      title.textContent = location.nameRu;
      this.targetLocations.appendChild(elem);
      return { id: location.id, elem, btn, nameRu: location.nameRu, image: location.image };
    });
    this.addEvents();
  }
  setRuCountGroups(elem, value) {
    elem.innerText = ` (${value})`;
  }
  changeLocation(id) {
    if (this.activeLocation) {
      this.activeLocation.btn.classList.remove("active");
    }
    this.activeLocation = this.locations.find((location) => location.id === id);
    const activeId = this.activeLocation.id;
    this.activeLocation.btn.classList.add("active");
    this.mobilePreviewTitle.innerText = this.activeLocation.nameRu;
    this.image.setAttribute("alt", this.activeLocation.nameRu);
    this.image.setAttribute("src", this.activeLocation.image);
    this.imagePreview.setAttribute("alt", this.activeLocation.nameRu);
    this.imagePreview.setAttribute("src", this.activeLocation.image);
    document.dispatchEvent(new CustomEvent("beforeChangeLocation", {
      detail: {
        newLocation: activeId
      }
    }));
  }
  addEvents() {
    this.locations.forEach((location) => {
      location.btn.addEventListener("click", (e) => {
        this.changeLocation(location.id);
      });
    });
  }
}
class SmartGroup {
  constructor(data, goods, goodPopup) {
    // Точка
    this.templateDot = document.querySelector("#template-dot");
    this.targetDots = document.querySelector("#target-dots");
    // Элемент списка
    this.templateGroup = document.querySelector("#template-group");
    this.targetGroups = document.querySelector("#target-groups");
    // Элемент триггер попапа
    this.elemTriggerPopup = document.querySelector(".smart-viewer");
    // Данные
    this.id = data.id;
    this.nameRu = data.nameRu;
    this.image = data.image;
    this.imageSmall = data.imageSmall;
    this.locations = data.locations; // locations: [ { id: "kitchen", x: 300, y: 150, order: 2 } ]

    // Товары в группе
    this.goods = goods;

    // Попап
    this.goodPopup = goodPopup;

    this.addEvents();
  }
  createHtml(locationName) {
    const location = this.locations.find((obj) => obj.id === locationName);
    if (!location) return;
    const IMAGE_WIDTH = 1500;
    const IMAGE_HEIGHT = 750;
    // Create DOT
    const newDot = this.templateDot.content.cloneNode(true);
    const btn = newDot.querySelector("button");
    btn.dataset.smartGroup = this.id;
    btn.setAttribute("title", this.nameRu);
    btn.style.top = `${Math.round(+location.y / (IMAGE_HEIGHT * 0.01))}%`;
    btn.style.left = `${Math.round(+location.x / (IMAGE_WIDTH * 0.01))}%`;
    if (Math.round(+location.x / (IMAGE_WIDTH * 0.01)) > 60) {
      btn.classList.add("reverse");
      btn.style.left = ``;
      btn.style.right = `${100 - (Math.round((+location.x + 44) / (IMAGE_WIDTH * 0.01)))}%`;
    }
    newDot.querySelector(".dot__title").innerText = this.nameRu;
    this.targetDots.appendChild(newDot);
    // Create item group
    const newGroup = this.templateGroup.content.cloneNode(true);
    const groupBtn = newGroup.querySelector("button");
    newGroup.querySelector(".smart-categories__text").innerText = this.nameRu;
    newGroup.querySelector("img").setAttribute("alt", "Пример " + this.nameRu);
    newGroup.querySelector("img").setAttribute("src", this.image);
    this.targetGroups.appendChild(newGroup);

    // Events
    btn.addEventListener("mouseenter", () => {
      btn.style.zIndex = "7";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.zIndex = "";
    });
    btn.addEventListener("click", () => {
      // Update popup
      this.goodPopup.updatePopup(this);
      this.elemTriggerPopup.classList.add("smart-viewer--good");
      // OVERLAY MAIN
      if (overlayGood && window.innerWidth >= 1200) {
        overlayGood.classList.add("opened");
        header.classList.add("hide-good");
        bodyFix(true);
      }
    });
    groupBtn.addEventListener("click", () => {
      // Update popup
      this.goodPopup.updatePopup(this);
      this.elemTriggerPopup.classList.add("smart-viewer--good");
      if (overlayGood && window.innerWidth >= 1200) {
        overlayGood.classList.add("opened");
        header.classList.add("hide-good");
        bodyFix(true);
      }
    });
  }
  addEvents() {
    document.addEventListener("changeLocation", (e) => {
      const loc = e.detail.newLocation;
      this.createHtml(loc);
    })
  }
}

class SmartTabs {
  constructor(wrapper) {
    this.triggers = Array.from(wrapper.querySelectorAll("[data-smart-tabs-btn]"));
    this.windowsWrapper = wrapper.querySelector("[data-smart-tabs-windows]");
    this.windows = Array.from(wrapper.querySelectorAll("[data-smart-tabs-window]"));
    this.windowsWrapper.style.width = `${100 * this.windows.length}%`;
    this.windows.forEach((window) => window.style.width = `${100 / this.windows.length}%`)
    this.addEvents();
  }
  changeTab(index) {
    const oneTabPercent = 100 / this.windows.length; // 100%
    this.windowsWrapper.style.transform = `translateX(-${oneTabPercent * index}%)`;
    this.triggers.forEach((trigger, i) => {
      trigger.classList.remove("active");
      if (index === i) trigger.classList.add("active");
    })
  }
  addEvents() {
    this.triggers.forEach((trigger, index) => {
      trigger.addEventListener("click", (e) => {
        this.changeTab(index);
      })
    });
  }
}
class SmartPagination {
  constructor(wrapper) {
    this.el = wrapper.querySelector(".smart-pagination");
    this.list = wrapper.querySelector(".smart-pagination__list");
    this.activeIndex = 0;

    this.addEvents();
  }
  updateAll(val) {
    this.removeAll();
    for (let i = 0; i < val; i++) {
      const li = document.createElement("li");
      li.classList.add("smart-pagination__item");
      li.innerHTML = `
        <button class="smart-pagination__btn"><span>${i + 1}</span></button>
      `;
      this.list.appendChild(li);
    }
  }
  removeAll() {
    while (this.list.children.length > 0) {
      this.list.removeChild(this.list.children[0]);
    }
  }
  addEvents() {
    this.list.addEventListener("click", (e) => {

    });
  }
}
class SmartGood {
  constructor(data) {
    this.id = data.id;
    this.nameRu = data.nameRu;
    this.link = data.link;
    this.group = data.group;
    this.app = data.app;
    this.additional = data.additional;
  }

}

class Popups {
  constructor(wrapper, fixBodyFunc, unfixBodyFunc) {
    this.fixBody = fixBodyFunc;
    this.unfixBody = unfixBodyFunc;
    this.isOpen = false;
    this.wrapper = wrapper;
    this.popups = Array.from(wrapper.querySelectorAll('.popup')).map((popup) => new Popup(popup, this));
    this.openedPopup = null;
    this.backPopups = [];

    this.tl = gsap.timeline({
      onReverseComplete: () => {
        if (this.backPopups.length > 0) {
          this.backPopups.forEach((popup) => popup.close());
          while (this.backPopups.length > 0) {
            this.backPopups.pop();
          }
        }
      }
    });
    this.tl.paused(true);
    this.tl.fromTo(this.wrapper, {
      y: '100vh'
    }, {
      duration: 0.1,
      y: 0
    });
    this.tl.to(this.wrapper, {
      duration: .2,
      opacity: 1
    }, '>');


    this.events();
  }

  open() {
    this.isOpen = true;
    this.fixBody();
    this.wrapper.classList.add('opened');
    this.tl.play();
  }
  close() {
    this.openedPopup.close();
    this.openedPopup = null;
    this.isOpen = false;
    this.wrapper.classList.remove('opened');
    this.unfixBody();
    this.tl.reverse();
  }
  backPopup(popup) {
    const prevPopup = this.backPopups[this.backPopups.length - 1];
    popup.close();
    prevPopup.toReturn();
    this.openedPopup = prevPopup;
    this.backPopups.pop();
  }
  openPopup(popup) {
    if (!this.isOpen) {
      this.open();
      this.openedPopup = popup;
      popup.open();
    } else {
      this.openedPopup.toBack();
      this.backPopups.push(this.openedPopup);
      this.openedPopup = popup;
      popup.open();
    }
  }
  openIdPopup(id) {
    this.popups.forEach((popup) => {
      if (popup.name === id) {
        this.openPopup(popup);
      }
    });
  }
  closePopup() {
    if (this.isOpen) this.close();
  }

  events() {
    this.wrapper.addEventListener('click', (e) => {
      if (e.target === this.wrapper) this.close();
    });
    window.addEventListener("click", (e) => {
      if (e.target.closest("[data-popup]") && !e.target.closest(".swiper-btn")) {
        if (e.target.closest("[data-popup]").tagName === "A") e.preventDefault();
        this.openIdPopup(e.target.closest("[data-popup]").dataset.popup);
      }
    });
  }
}
class Popup {
  constructor(popup, parent) {
    this.parent = parent;
    this.popup = popup;
    this.header = popup.querySelector('.popup__header');
    this.body = popup.querySelector('.popup__body');
    this.closeBtn = popup.querySelector('.popup__close');
    this.backBtn = popup.querySelector('.popup__back');
    this.name = popup.id;
    this.buttons = Array.from(document.querySelectorAll(`[data-popup="${this.name}"]`));
    this.isOpen = false;
    this.addCloseBtns = [];
    if (popup.querySelectorAll("[data-close]")) {
      this.addCloseBtns = Array.from(popup.querySelectorAll("[data-close]"));
    }
    this.events();
  }

  toBack() {
    this.popup.classList.remove('popup-open');
    this.popup.classList.add('popup-back');
  }

  toReturn() {
    if (this.popup.classList.contains('popup-back')) this.popup.classList.remove('popup-back');
    if (!this.popup.classList.contains('popup-open')) this.popup.classList.add('popup-open');
  }

  open() {
    let headerScrollHeight = this.header ? this.header.scrollHeight : 0;
    let bodyScrollHeight = this.body ? this.body.scrollHeight : 0;
    if (window.innerHeight < (headerScrollHeight + bodyScrollHeight)) {
      this.popup.classList.add('popup_overflow');
    }
    this.popup.classList.add('popup-open');
  }

  close() {
    if (this.popup.classList.contains('popup-back')) this.popup.classList.remove('popup-back');
    if (this.popup.classList.contains('popup-open')) this.popup.classList.remove('popup-open');
    if (this.popup.classList.contains('popup_overflow')) this.popup.classList.remove('popup_overflow');
  }

  events() {
    if (this.backBtn) {
      this.backBtn.addEventListener("click", () => {
        this.parent.backPopup(this);
      });
    }
    this.closeBtn.addEventListener('click', () => {
      this.parent.closePopup();
    });
    this.parent.wrapper.addEventListener("click", (e) => {
      if (e.target.closest("[data-close]")) this.parent.closePopup();
    });
  }
}
function openPopup(id) {
  if (mainPopups !== undefined) mainPopups.openIdPopup(id);
}
// Для закрытия попапа "из вне", используем функцию closeModal
function closePopup() {
  if (mainPopups !== undefined) mainPopups.closePopup();
}

function checkWidthScrollBar() {
  let div = document.createElement("div");
  div.style.overflowY = "scroll";
  div.style.width = "50px";
  div.style.height = "50px";
  document.body.append(div);
  widthScrollBar = div.offsetWidth - div.clientWidth;
  div.remove();
}
function checkVH() {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
function scrollToElement(target, offset, duration, callback) {
  const targetPos =
    target.getBoundingClientRect().top + window.scrollY - offset;
  const startPos = window.scrollY;
  const distance = targetPos - startPos;

  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      callback();
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}


function createShareItemLink(social, domen, text, title, descr, image) {
  let link = "https://";
  switch (social) {
    case "vk":
      link += "vk.com/share.php?url=";
      break;
      case "ok":
      link += "connect.ok.ru/offer?url=";      
      break;
      case "tg":
      link += "telegram.me/share/url?url=";
      break;
    default:
      break;
  }
  link += domen ?? "https://smart-home.mts.n3.by/";
  link += "&title=";
  link += title ?? "Сделайте+свой+дом+умным+-+вместе+с+МТС";
  link += "&text=";
  link += text ?? "Сделайте+свой+дом+умным+-+вместе+с+МТС";
  //link += "&description=";
  //link += descr ?? "Наш+магазин+предлагает+вам+самые+передовые+технологии+для+создания+умного+дома,+вы+сможете+контролировать+каждый+аспект+своего+дома,+где+бы+вы+ни+находились,+с+помощью+вашего+смартфона";
  //link += "&imageurl=";
  //link += image ?? "https://www.mts.by/upload/resize_cache/webp/dev2fun_opengraph/94e/94e8235d21a737c0066943bca4469420.webp";
  return link;
}
