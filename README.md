# angular-modal-bootstrap

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-modal-bootstrap)

## use

- modal html component declaration:

```javascript
  <my-app-modal title="the modal title" modalId="modalId" text="text to show">loading</my-app-modal>
```

- the button:

```javascript
<div class="bd-example">
<button (click)="showModal(text)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalId">
      Launch demo modal 1
</button>
</div>
```