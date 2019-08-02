# angular-modal-bootstrap

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-modal-bootstrap)

# use

- modal html component declaration:

  <my-app-modal title="titre" idModal="idmodal" text="text to show">loading</my-app-modal>

- the button:

  <div class="bd-example">
    <button (click)="showModal(text)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#idmodal">
      Launch demo modal 1
    </button>
  </div>