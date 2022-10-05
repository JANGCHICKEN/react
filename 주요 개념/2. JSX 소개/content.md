# JSX 소개

## JSX란?

### JSX에 표현식 포함하기

아래 예시에서는 name이라는 변수를 선언한 후 중괄호로 감싸 JSX 안에 사용하였습니다.

```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

```jsx
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

가독성을 좋게 하기 위해 JSX를 여러 줄로 나눴습니다. 필수는 아니지만, 이 작업을 수행할 때 자동 세미콜론 삽입을 피하고자 괄호로 묶는 것을 권장합니다.


### JSX도 표현식입니다

```jsx
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### JSX 속성 정의

속성에 따옴표를 이용해 문자열 리터럴을 정의할 수 있습니다.

```jsx
const element = <div tabIndex="0"></div>;
```

중괄호를 사용하여 어트리뷰트에 JavaScript 표현식을 삽입할 수도 있습니다.

```jsx
const element = <img src={user.avatarUrl}></img>;
```


>**경고**
>
>JSX는 HTML보다는 JavaScript에 가깝기 때문에, React DOM은 HTML 어트리뷰트 이름 대신 camelCase 프로퍼티 명명 규칙을 사용합니다.
>
>예를 들어, JSX에서 class는 className가 되고 tabindex는 tabIndex가 됩니다.


### JSX로 자식 정의

```jsx
const element = <img src={user.avatarUrl} />;
```

```jsx
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### JSX는 주입 공격을 방지합니다

```jsx
const title = response.potentiallyMaliciousInput;
// 이것은 안전합니다.
const element = <h1>{title}</h1>;
```

기본적으로 React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로, 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않습니다. 모든 항목은 렌더링 되기 전에 문자열로 변환됩니다. 이런 특성으로 인해 XSS (cross-site-scripting) 공격을 방지할 수 있습니다.

### JSX는 객체를 표현합니다.

Babel은 JSX를 `React.createElement()` 호출로 컴파일합니다.

```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```jsx
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

```jsx
// 주의: 다음 구조는 단순화되었습니다
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

>**팁**
>
>ES6 및 JSX 코드가 올바르게 표시되도록 편집기에 “Babel” 언어 설정을 사용하는 것을 권장합니다.

