# JS Scoping exercises

​

1. What’s the result of executing this code and why.

```js
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

​

> undefined y 2
> _undefined y 2_
> ​
> ​ 2. What is result?

```js
var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
```

> No hay nada para mostrar en consola
>
> ​
> ​ 3. What is the result of the following code? Explain your answer.

```js
var a = 1
function foo() {
  var a = 2;
​
  function bar() {
    console.log( a );
  }
​
  return bar;
}
var baz = foo();
baz();
```

> _2_ > _SyntaxError_
> ​
> ​ 4. What will you see in the console for the following example?

```js
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
```

​

> No hay nada para mostrar en consola
> No se mostró nada
