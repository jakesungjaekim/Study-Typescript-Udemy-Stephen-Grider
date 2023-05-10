왜 우리는 이런 기능에 신경써야할까 ? 얼마나 자주 쓰는걸까 ? 


Type: Easy way to refer to the different properties + functions that vlaue has


* value: 할당할 수 있는 변수들
* 다양한속성과 함수를 참조한다?

[Type]   | [Values that have this type]

String   | '', 'today is wednesday', 'hi there'
Number   | 0 1 .000025 -20
Boolean  | true false
Date     | new Date()
Todo     | {id: 1, completed: true, title: 'jake' }

[Types]	|
        | -- Primitive Type
        	| -- number boolean void undefiend
            | -- string symbol null
        | -- Object Type
        	| -- functions arrays
            | -- classes objects 

간단하게 카테고리가 2가지로 나뉜 이유는 
Object Type은 컴퓨터에게 Type을 속일 수 있는 녀석들이기 때문이다.

** Why do we care about Types? **
- types are used by the TS compiler to analyze our code for erros
- types allows other engineers to understand what values are flowing around our codebase
