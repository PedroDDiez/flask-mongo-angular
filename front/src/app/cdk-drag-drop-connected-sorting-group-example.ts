import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { WORDS } from './mock-words';
import { Anagram } from './anagram';
import { WordService } from './word.service';
/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
})
export class CdkDragDropConnectedSortingGroupExample {
  word: string[];
  currentAnagram: Anagram = { seed: '', anagrams: []};

  constructor(private wordService: WordService) {} 

  ngOnInit() {
    this.getWords();
  }
  
  getWords(): void {
    this.wordService.getWords().subscribe(words => this.word = words);
  }

  updateWords(word_list: string[]): void {
    this.wordService.updateWordList(word_list).subscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.updateWords(event.container.data);
  }

}


/** 
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */