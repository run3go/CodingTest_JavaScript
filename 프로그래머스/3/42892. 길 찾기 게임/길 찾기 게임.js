class Node {
    constructor (num, info, left = null, right = null) {
        this.info = info;
        this.num = num;
        this.left = left;
        this.right = right;
    }
    
    hasLeft() {
        return this.left !== null;
    }

    hasRight() {
        return this.right !== null;
    }
}

function bt (nodeinfo) {
    const nodes = Array.from({length: nodeinfo.length}, (_, i) => i + 1);
    nodes.sort((a,b) => {
        const [ax, ay] = nodeinfo[a - 1];
        const [bx, by] = nodeinfo[b - 1];
        return ay === by ? ax - bx : by - ay;
    })
    
    let root = null;
    for(const node of nodes) {
        if(!root) {
            root = new Node(node, nodeinfo[node - 1]);
            continue;
        } 
        let parent = root;
        const newNode = new Node(node, nodeinfo[node - 1]);
        while(true) {
            if(newNode.info[0] < parent.info[0]) {
                if(parent.hasLeft()) {
                    parent = parent.left;
                    continue;
                }
                parent.left = newNode;
                break;
            } else {
                if(parent.hasRight()) {
                    parent = parent.right;
                    continue;
                }
                parent.right = newNode;
                break;
            }
        }
    }
    
    return root;
}

function preOrder (node, answer) {
    if(!node) return;
    answer[0].push(node.num);
    preOrder(node.left, answer);
    preOrder(node.right, answer);
}

function postOrder (node, answer) {
    if(!node) return;
    postOrder (node.left, answer);
    postOrder (node.right, answer);
    answer[1].push(node.num);
}

function solution(nodeinfo) {
    const answer = [[], []];
    const root = bt(nodeinfo);
    preOrder(root, answer);
    postOrder(root, answer);
    return answer;
}