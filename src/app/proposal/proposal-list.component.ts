import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({

  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'https://portfolio.damjanradev.com', 'Ruby on Rails', 150, 120, 15, 'damjan@gmail.com')
  proposalTwo: Proposal = new Proposal(99, 'X Company',               'https://portfolio.damjanradev.com', 'Ruby on Rails', 150, 120, 15,     'damjan@gmail.com')
  proposalThree: Proposal = new Proposal(300, 'Something Company', 'https://portfolio.damjanradev.com', 'Ruby on Rails', 150, 120, 15, 'damjan@gmail.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
