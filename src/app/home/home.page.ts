import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private users = [
    {
      name: 'User 1',
      avatar: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png',
      message: ''
    },
    {
      name: 'User 2',
      avatar: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png',
      message: ''
    },
    {
      name: 'User 3',
      avatar: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-10-avatar-2754575_120521.png',
      message: ''
    },
    {
      name: 'User 4',
      avatar: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-9-avatar-2754584_120518.png',
      message: ''
    }
  ]

  userID: number
  chatMessage = ''
  emptyChat: boolean

  constructor() {
    this.userID = 0
    this.emptyChat = true
  }

  setUser(userID: number) {
    if (userID != this.userID) {
      const currentUserAvatar = window.document.getElementById('currentUserAvatar')!
      this.users[this.userID].message = this.chatMessage
      this.userID = userID
      this.chatMessage = this.users[this.userID].message
      currentUserAvatar.innerHTML = '<img src="' + this.users[this.userID].avatar + '"/>'
    }
  }

  sendMessage() {
    const chatList = window.document.getElementById('chat')!
    if (this.emptyChat) {
      chatList.innerHTML = ''
      this.emptyChat = false
    }
    if (this.chatMessage != '') {
      let avatar = '<ion-avatar slot="start"><img src="' + this.users[this.userID].avatar + '"/></ion-avatar>'
      let label = '<ion-label text-wrap><h3>' + this.users[this.userID].name + '</h3><p>' + this.chatMessage + '</p></ion-label>'
      chatList.innerHTML = '<ion-item style="padding: 0; margin: 0;">' + avatar + label + '</ion-item>'! + chatList.innerHTML
      this.chatMessage = ''
      this.users[this.userID].message = this.chatMessage
    }
  }
}
