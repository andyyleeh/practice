var os = new OnScreen();

os.on('enter', '#bar1', function(element, event){
    element.style.width = '70%';
})
os.on('enter', '#bar2', function(element, event){
    element.style.width = '87%';
})
os.on('enter', '#bar3', function(element, event){
    element.style.width = '84%';
})
