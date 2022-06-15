document.addEventListener('DOMContentLoaded', () => {
    // dragging start 
    const main = document.querySelectorAll('.main');
    const boxes = document.querySelectorAll('.box');
    const containers = document.querySelectorAll('.container');
    var over_div = null;
    main.forEach(async con => {
        con.addEventListener('dragover', e => {
            e.preventDefault();
            const draggable = document.querySelector('.dragging');
            if (over_div != null) {
                con.insertBefore(draggable, over_div);
                over_div = null;
            } else {
                con.appendChild(draggable);
            }
        });
    })

    boxes.forEach(box => {
        box.addEventListener('dragstart', () => {
            box.classList.add('dragging')
        });

        box.addEventListener('dragover', (e) => {
            e.preventDefault();
            over_div = box;
        });

        box.addEventListener('dragend', () => {
            box.classList.remove('dragging')
        });
    })
    //dragging end
    // resize start 
    var m_pos;
    var active_con = null;
    function resize(e) {
        var dx = -(m_pos - e.x);
        m_pos = e.x;
        active_con.style.width = (parseInt(getComputedStyle(active_con, '').width) + dx) + "px";
    }
    containers.forEach(container=>{
        container.addEventListener("mousedown", function (e) {
            console.log('mouse up');
            active_con = container;
            m_pos = e.x;
            document.addEventListener("mousemove", resize, false);
        }, false)
    });
    document.addEventListener("mouseup", function () {
        console.log('mouse up');
        document.removeEventListener("mousemove", resize, false);
    }, false);
    //resize end

})