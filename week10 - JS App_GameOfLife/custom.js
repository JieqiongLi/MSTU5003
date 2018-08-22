var CLASS = {
    ALIVE: 'alive',
    BOARD: 'lifeBoard',
    CELL: 'cell',
    ROW: 'row'
};
var CELL_SIZE_PIXELS = 12;

/**
 * Creates a life board of the specified dimension.
 *
 * REQUIRED PARAMS:
 * @param params.containerId The id of the container to draw the life board in.
 *
 * OPTIONAL PARAMS:
 * @param params.size.height The height of the board in squares.  Defaults to 10.
 * @param params.size.width The width of the board in squares.  Defaults to 10.
 */
function LifeBoard(params) {
    //Initialize defaults
    params = params || {};
    params.size = params.size || {};
    params.size.height = params.size.height || 10;
    params.size.width = params.size.width || 10;

    //Initialize board properties
    var me = this;
    me.container = document.getElementById(params.containerId);
    if (!me.container) {
        throw 'LifeBoard:  The container for the life board is required.';
    }
    me.size = params.size;

    //Initialize functions
    me.cycle = function () {
        //Get the next states for the whole board
        var nextState = [];
        for (var y = 0; y < me.size.height; y++) {
            nextState[y] = []
            for (var x = 0; x < me.size.width; x++) {
                nextState[y][x] = me.cells[y][x].getNextState();
            }
        }


        //Update the states
        for (var y = 0; y < me.size.height; y++) {
            for (var x = 0; x < me.size.width; x++) {
                me.cells[y][x].setAlive(nextState[y][x]);
            }
        }
    };

    //Initialize the board
    me.container.className = CLASS.BOARD;
    var boardHeightPixels = CELL_SIZE_PIXELS * me.size.height;
    var boardWidthPixels = CELL_SIZE_PIXELS * me.size.width;
    me.container.setAttribute("style", "width:" + boardWidthPixels + "px; " + " height: boardHeightPixels;");
    me.cells = [];
    //Create the cells
    for (var y = 0; y < me.size.height; y++) {
        me.cells[y] = [];
        var row = document.createElement('div');
        row.className = CLASS.ROW;
        for (var x = 0; x < me.size.width; x++) {
            me.cells[y][x] = new LifeCell({
                container: row
            });
        }
        me.container.appendChild(row);
    }
    //Add the neighbors
    for (var y = 0; y < me.size.height; y++) {
        for (var x = 0; x < me.size.width; x++) {
            var neighbors = [];

            //Add the top neighbor
            if(y > 0){
                var topNeighbor = me.cells[y-1][x];
                if(topNeighbor){
                    neighbors.push(topNeighbor);
                }
            }
            if(x > 0){
                var leftNeighbor = me.cells[y][x-1];
                if(leftNeighbor){
                    neighbors.push(leftNeighbor);
                }
            }
            if((x+1) < me.size.width){
                var rightNeighbor = me.cells[y][x+1];
                if(rightNeighbor){
                    neighbors.push(rightNeighbor);
                }
            }
            if((y+1) < me.size.height){
                var bottomNeighbor = me.cells[y+1][x];
                if(bottomNeighbor){
                    neighbors.push(bottomNeighbor);
                }
            }

            me.cells[y][x].setNeighbors(neighbors);
        }
    }
    me.container.appendChild(row);

    setInterval(function(){
        me.cycle();
    }, 200);
};

/**
 * Creates an individual life cell.
 *
 * REQUIRED PARAMS:
 * @param params.container The container to append the cell into.
 *
 * OPTIONAL PARAMS:
 * @param params.alive True if the cell should be alive, false if the cell should be dead, otherwise will be random.
 */
function LifeCell(params) {
    //Initialize defaults
    params = params || {};
    alive = (params.alive === true || params.alive === false) ? params.alive : (Math.random() - .5 > 0);
    if (!params.container) {
        throw 'LifeCell:  The container for the cell is required.';
    }

    //Store properties
    var me = this;
    me.container = params.container;
    me.neighbors = [];

    //Initialize functions
    me.setAlive = function (alive) {
        if(me.alive != alive){
            me.alive = alive;
            if (alive) {
                me.cell.className += ' ' + CLASS.ALIVE;
            } else {
                me.cell.className = me.cell.className.replace(' ' + CLASS.ALIVE, '');
            }
        }
    }
    me.isAlive = function () {
        return me.alive;
    }
    /**
     * Gets whether the next state is alive or dead based on its neighbors.  This does not change the state.
     */
    me.getNextState = function(){
        var livingNeighbors = 0;

        for(var i = 0; i < 4; i++){
            var neighbor = me.neighbors[i]
            if(neighbor){
                if(neighbor.isAlive()){
                    livingNeighbors++;
                }
            } else {
                livingNeighbors += Math.floor(Math.random() + .5);//Randomize the edges
            }
        }

        //Under-population
        if(livingNeighbors < 2){
            return false;
        }
        //Over-population
        if(livingNeighbors == 4){
            return false;
        }
        //Birth
        if(livingNeighbors == 3){
            return true;
        }
        return me.isAlive();
    };
    /**
     * Sets the neighbors of the cell to the provided cells.
     *
     * @param neighbors The neighbor cells.
     */
    me.setNeighbors = function (neighbors) {
        me.neighbors = neighbors || [];
    };

    //Initialize the cell
    me.cell = document.createElement('div');
    me.cell.className = CLASS.CELL;
    me.container.appendChild(me.cell);
    me.setAlive(alive);
};

var lifeBoard = new LifeBoard({
    containerId: 'lifeBoardContainer',
    size: {
        height: 100,
        width: 100
    }
});
