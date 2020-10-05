#include <stdio.h>
#include <stdlib.h>

typedef struct ListNode
{
    int data;
    struct ListNode *next;
}node;

node *createList(node *head, int num);
node *insertNodeAtTail(node *head, int data);
node *insertNodeAtHead(node *head, int data);
void DeleteNode(node *head, int pos);
void traverse(node *head);

node *createList(node *head, int num)
{
    node *temp, *newNode;
    int data;
    if(head != NULL)
    {
        printf("Node already exists");
        return head;
    }
    for(int i=0; i<num; i++)
    {
        printf("Enter data: ");
        scanf("%d",&data);
        newNode = (node*)malloc(sizeof(node));
        newNode->data = data;
        newNode->next = NULL;
        if(head == NULL)
        {
            head = newNode;
            temp = newNode;
        }
        else
        {
            temp->next = newNode;
            temp = newNode;
        }
    }
    return head;
}
node *insertNodeAtTail (node *head, int data)
{
    node* newNode, *temp;
    newNode = (node*)malloc(sizeof(node));
    newNode->data = data;
    if(head == NULL)
    {
        head = newNode;
        newNode->next = NULL;
        return head;
    }
    temp = head;
    while(temp->next != NULL)
    {
        temp = temp->next;
    }
    temp->next = newNode;
    newNode->next = NULL;
    return head;
}
node *insertNodeAtHead(node *head, int data)
{
    node *newNode = malloc(sizeof(newNode));
    newNode->data = data;
    if(head == NULL)
    {
        head = newNode;
        return head;
    }
    newNode->next = head;
    head = newNode;
    return head;
}
void traverse(node *head)
{
    node *temp;
    temp = head;
    while (temp != NULL)
    {
        printf(" --> %d",temp->data);
        temp = temp->next;
    }
    printf("\n");   
}
void DeleteNode(node *head, int pos)
{
    node *temp, *temp1;
    int cnt = 1;
    if(head == NULL)
    {
        return;
    }
    if(pos == 1)
    {
        temp = head;
        head = head->next;
        free(temp);
    }
    temp = head;
    while(cnt < pos-1 && temp != NULL)
    {
        temp = temp->next;
        cnt++;
    }
    if(temp != NULL)
    {
        temp1 = temp->next;
        temp->next = temp1->next;
        free(temp1);
    }
}

int main()
{
    node *head = NULL;
    int choice, size, data, pos;
    while(1)
    {
        printf("\n1. Create a List \n2. Insert a node after the linked list");
        printf("\n3. Insert a node before the linked lis \n4. Traverse and print the content of the list");
        printf("\n5. Delete Node\n6. Exit \nEnter your choice: ");    
        scanf("%d",&choice);
        switch(choice)
        {
            case 1:
                printf("Enter size of the list: ");
                scanf("%d",&size);
                head = createList(head, size);
                break;
            case 2:
                printf("Enter the data of the node: ");
                scanf("%d",&data);
                head = insertNodeAtTail(head, data);
                break;
            case 3:
                printf("Enter the data of the node: ");
                scanf("%d",&data);
                head = insertNodeAtHead(head, data);
                break;
            case 4:
                traverse(head);
                break;
            case 5:
                printf("Enter the position no: ");
                scanf("%d", &pos);
                DeleteNode(head, pos);
                break;
            case 6:
                printf("End");
                exit(0);
            default:
                printf("Invalid Input");
        }
    }
    return 0;
}
