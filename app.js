document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
    const main_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.main',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
        }
    });
    main_tl.from(".main__title", {x: -500, opacity: 0, filter: "blur(10px)"})
    main_tl.from(".main__text", {x: 500, opacity: 0, filter: "blur(10px)"})

    const main_card = gsap.timeline({
        scrollTrigger: {
            trigger: '.main__grid',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
        }
    });

    const cardsMain = document.querySelectorAll('.card');

    for(let i = 0; i < cardsMain.length; i++){
        const card = cardsMain[i];
        if(i % 2){
            main_card.from(card, {x: -500, opacity: 0, filter: "blur(10px)"})
        }else{
            main_card.from(card, {x: 500, opacity: 0, filter: "blur(10px)"})
        }
    }

    const testimonial_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.testimonial__grid',
            start: 'top 90%',
            end: 'top top',
            scrub: 1,
        }
    })
    testimonial_tl.from(".testimonial__title", {x: -500, opacity: 0, filter: "blur(10px)"})

    const cardsTestimonial = document.querySelectorAll('.testimonial__card');

    for(let i = 0; i < cardsTestimonial.length; i++){
        const testimonial = cardsTestimonial[i];
        if(i % 2){
            testimonial_tl.from(testimonial, {x: -500, opacity: 0, filter: "blur(10px)"})
        }else{
            testimonial_tl.from(testimonial, {x: 500, opacity: 0, filter: "blur(10px)"})
        }
    }

    // price
    const price_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.price',
            start: 'top 60%',
            end: 'top 10%',
            scrub: 1,
        }
    });
    price_tl.from(".price__title", {x: -500, opacity: 0, filter: "blur(10px)"})

    const price_cards = gsap.timeline({
        scrollTrigger: {
            trigger: '.price__row',
            start: 'top 50%',
            end: 'top 30%',
            scrub: 1,
        }
    });
    const cardPrices = document.querySelectorAll('.price__card');

    for(let i = 0; i < cardPrices.length; i++){
        const priceCard = cardPrices[i];
        price_cards.from(priceCard, {x: -500, opacity: 0, filter: "blur(10px)", delay: i})
    }
});