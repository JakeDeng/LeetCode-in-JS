//Linked List Node
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    return this;
}

var addTwoNumbers = function (l1, l2){
    //Sum linked List
    let sumHead = new ListNode(0);
    let sumNode = sumHead;
    let carry = 0;

    while(l1 != null || l2 != null){
        //carry from last round
        let digitSum = carry;
        if(l1 != null){
            digitSum += l1.val;
            //update node 
            l1 = l1.next;
        }
        if(l2 != null){
            digitSum += l2.val;
            //update node 
            l2 = l2.next;
        }

        sumNode.next = new ListNode(digitSum % 10);
        //update sumNode
        sumNode = sumNode.next;
        carry = Math.floor(digitSum / 10);
    }

    //last digit carry
    if(carry != 0){
        sumNode.next = new ListNode(carry);
    }
    return sumHead.next;
}

//util function 
var printList = function(listNode){
    let output = `Linked List: `;

    while(listNode != null){
        output += ` ${listNode.val} `;
        if(listNode.next != null){
            output += `->`;
            //update node
            listNode = listNode.next;
        }else{
            output += '=> END';
            break;
        }
    }
    console.log(output);
}

//test
//Linked list 1 : 2 -> 3 (32)
let node12 = new ListNode(3, undefined); 
let head1 = new ListNode(2, node12);

//Linked list 2 : 4 -> 5 (54)
let node22 = new ListNode(5, undefined);
let head2 = new ListNode(4, node22);

printList(head1);
printList(head2);

let resultNode = addTwoNumbers(head1, head2);
printList(resultNode);
