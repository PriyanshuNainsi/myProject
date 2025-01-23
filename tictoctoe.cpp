#include<iostream>
#include<string>
#include<vector>
using namespace std;


int main(){
    char arr[3][3]={{'_','_','_' },{'_','_','_' },{'_','_','_' }};
    int k=0;
    bool flag=false;
    cout<<"RULES:"<<endl;
    cout<<"row and col should be between (0-2):"<<endl;
    cout<<"char should be either 'x' or 'o' :"<<endl;
     while(k<9){char ch;
     
      int m,n;
     
      cout<<"Enter row(0-2) and col(0-2):";
      cin>>m>>n;
      
       if(m<0 || m>2 || n<0 || n>2 || arr[m][n]!='_'){
        cout<<"rule break:"<<endl;
        cout<<"Enter again :"<<endl;
        continue;
       }
      cout<<"ENTER 'x' or 'o' :";
      cin>>ch;
      
      arr[m][n]=ch;

     

    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cout<<arr[i][j];
        }
        cout<<endl;
    }
    if((arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2] && arr[0][0]!='_' ) ||
         (arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2] && arr[1][0]!='_') ||
         (arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2] && arr[2][0]!='_' ) ||
         (arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0] && arr[0][0]!='_' ) ||
         (arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1] && arr[0][1]!='_' ) ||
         (arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2] && arr[0][2]!='_' ) ||
         (arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0]!='_' ) ||
         (arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2]!='_' )
    )
       {
        cout<<"you won "<<endl;
        flag=true;
        
        break;
    }
    k++;
    }
    if(flag==false){
        cout<<"Tie game";
    }








}