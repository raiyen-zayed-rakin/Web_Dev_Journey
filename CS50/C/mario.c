#include <stdio.h>

int get_size();
void print_grid(int size);

int main(void)
{   

    print_grid(get_size());
    
}

int get_size(void)
{
    int n;
    printf("Enter a positive integer: ");
    do
    {
        scanf("%d", &n);    
    }
    while(n < 1);
    return n;
}

void print_grid(int size)
{
    for (int i = 0; i < size; i++)
    {
        for (int j = 0; j < size; j++)
        {
            printf("#");
        }
        printf("\n");
    }
}