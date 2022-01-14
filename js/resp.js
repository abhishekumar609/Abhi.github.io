burger = document.querySelector('.burger')
navber = document.querySelector('.navber')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addevEntListener('click',()=>{
    navber.classlist.toggle('v-class-resp');
    navlist.classlist.toggle('v-class-resp');
    navber.classlist.toggle('h-nav-resp');

})